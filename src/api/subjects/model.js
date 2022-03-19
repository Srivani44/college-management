import mongoose from 'mongoose'

const subjectsSchema = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    facultyName:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
})

const model = mongoose.model('subjects',subjectsSchema)

export default model