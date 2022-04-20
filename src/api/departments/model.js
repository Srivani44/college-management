import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Users',
        req:true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    faculty:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref: 'Faculties'
        }
    ],
       hod:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Faculties'
       },
       
       createdBy:{
       type:mongoose.SchemaTypes.ObjectId,
       ref:'Users',
       req:true
       }
}, {
    timestamps: true
});

const model = mongoose.model('Departments', departmentSchema)

export default model