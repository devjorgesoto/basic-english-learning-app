const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({ 
    text:{
        type: String, 
        required: ['Please add a text value', true]
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal' , goalSchema)