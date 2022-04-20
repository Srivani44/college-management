import mongoose from 'mongoose'

const marksSchema = new mongoose.Schema({
 studentId:{
     type:mongoose.SchemaTypes.ObjectId,
     ref:'Students'
 },
 
 subjectId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'subjects'
},

acadamicYear:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'acadamics'
},

marks:{
    type:String
},

totalMarks:{
    type:String

}
})

const model = mongoose.model('marks',marksSchema)

export default model