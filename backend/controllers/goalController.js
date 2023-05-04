const asyncHandler = require('express-async-handler')
const Goal = require ('../models/goalModel')


//@desc Get goals
//@route Get api/goals
//@access Private
const getGoals = asyncHandler(async(req, res) => { // Notice : It's a const method (!)

    const goals = await Goal.find()

    res.status(200).json(goals)
})

//@desc Set goal
//@route Post api/goals
//@access Private
const setGoal = asyncHandler(async(req, res) => {

    const goal = await Goal.create({text: req.body})
    
    res.status(200).json(goal)
})

//@desc Update goal
//@route Put api/goals/:id
//@access Private
const updateGoal = asyncHandler(async(req, res) => {

    res.status(200).json({message:`Update goal ${req.params.id}`})
})

//@desc Delete goal
//@route Delete api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async(req, res) => {
    
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}
)
module.exports = {getGoals,setGoal,updateGoal,deleteGoal}