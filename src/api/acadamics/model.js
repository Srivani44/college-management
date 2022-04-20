import mongoose from 'mongoose'

const acadamicSchema = new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  startDate:{
    type:String,
    required:true
},
 endDate:{
    type:String,
    required:true
}
})

const model = mongoose.model('acadamics', acadamicSchema)

export default model