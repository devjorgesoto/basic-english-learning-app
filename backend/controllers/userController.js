const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require('express-async-handler')

const User = require ('../models/userModel')
const { use } = require('../routes/goalRoutes')

//@desc   Authenticate new user 
//@route  Post /api/user/login
//@access Public
const loginUser = asyncHandler (async(req,res)=>{

    const {email, password} = req.body

    //check for user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password,user.password))){

        res.status(201).json(
            {
            user : user,
            token: generateToken(user._id),
            message:'Valid credentials', 
        })
    } else {

        res.status(400)
        throw new Error('Invalid credentials')

        }
    }
)

//@desc   Register new user 
//@route  Post api/user
//@access Public
const registerUser = asyncHandler (async(req,res)=>{

    const {name, email, password} = req.body

    console.log (name, email, password)

    // error data fields missing
    if (!name || !email || !password){
        res.status(400)
        throw new Error ('Please add all fields')
        
    }

    // check unique user
    const userExists = await User.findOne({email})
    if (userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create(
        {
        name,
        email,
        password: hashedPassword,
        })

    console.log ('create user',user)

    if (user){
        res.status(201).json({
            user : user,
            message:'User succesfully created', 
            token: generateToken(user._id)
        })
    } else {

        res.status(400)
        throw new Error('Invalid user data')
    }

})

//@desc   Get user data
//@route  Get api/users/me
//@access Public
const getMe = asyncHandler (async(req,res)=>{

    res.json ({message: 'User display'})
})

// generate jwt token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn: '30d'})
}
     
module.exports = {loginUser, registerUser, getMe}
