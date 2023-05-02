const express = require ('express') 
const router = express.Router()
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')

// Get and Post Methods
router.route('/').get(getGoals).post(setGoal)


// Put and Delete Methods
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router

