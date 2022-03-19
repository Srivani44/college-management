import mongoose from 'mongoose'

const facultySchema = new mongoose.Schema({
    name:{
        type:String
    },
    gender:{
        type:String
    },
    qualification:{
        type:String
    },
    designation:{
        type:String
    },
    YOE:{
        type:Number
    }
});

const model = mongoose.model('faculties', facultySchema)

export default model
