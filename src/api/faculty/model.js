import mongoose from 'mongoose'

const facultySchema = new mongoose.Schema({
    userId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Users',
    req:true
    },

    name:{
        type:String,
        required:true,
    },
    
    employees:
        {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'emp'
        },
        
        createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users',
        req:true
        }
})

const model = mongoose.model('faculties',facultySchema)

export default model