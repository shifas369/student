const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const studentSchema = new Schema ({
    name:{
        type:String,
        // required:true
    },
    age:{
        type:Number,
        // required:true
    }
})
let studentData =mongoose.model('studentdetail', studentSchema)
module.exports = studentData;