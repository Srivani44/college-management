import subjects from './model'

export const addData = (req,res)=>{
subjects.create(req.body,(err,result)=>{
if(err){
    res.send(err)
}else{
    res.send(result)
}
})
}

export const getData = (req,res)=>{
    subjects.find(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const update = (req,res)=>{
    subjects.findByIdAndUpdate(req.params.id,req.body,{new :true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}

export const deleteData = (req,res)=>{
    subjects.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}
export const searchSubject = (req, res) => {
    subjects.find({code:req.query.code},(err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    })
  }