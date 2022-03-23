import mongoose from 'mongoose'

const facultiesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
       
    },
    qualification:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    YOE:{
        type:String,
        required:true
    }
})

const model = mongoose.model('faculties',facultiesSchema)

export default model