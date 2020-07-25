let mongoose = require('mongoose')
let Schema = mongoose.Schema


let FoodSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    foodDescription:{
        type:String,
        default:""
    },
    created_date:{
        type:Date,
        default:Date.now()
    }
})