import mongoose from 'mongoose'

const employeesSchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users'
    },
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
       
    },
    YOE:{
        type:String,
        required:true
    },
    employeeType:{
        type:String,
        required:true,
        default:"Teaching",
        enum:["Teaching","Non-Teaching"]
    },
    createdBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users',
        required:true
    }
})

const model = mongoose.model('emp',employeesSchema)

export default model