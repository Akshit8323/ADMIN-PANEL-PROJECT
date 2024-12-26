const mongoose = require("mongoose")
const MainSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Roll:{
        type:String,
        required:true
    },
    Course:{
        type:Array,
        required:true
    },
})

let mainAdmin = mongoose.model("MainData",MainSchema)
module.exports = mainAdmin