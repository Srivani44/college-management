import faculties from './model'

export const addData = (req,res)=>{
   const faculty = req.body;
   faculty.createdBy = req.user.id;
    faculties.create(req.body,(err,result)=>{
if(err){
    res.send(err)
}else{
    res.send(result)
}
})
}

export const show = (req,res)=>{
    faculties.find(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const index = (req, res) =>
  sendAllFaculties(res);

export const update = (req,res)=>{
    faculties.findByIdAndUpdate(req.params.id,req.body,{new :true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}

export const deleteData = (req,res)=>{
    faculties.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}
export const searchFaculty = (req, res) => {
    faculties.find({code:req.params.code},(err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    })
}

const sendAllFaculties = (res) => {
    faculties.find({})
   .populate('employees')
    .then(results=>{
      res.send(results)
    })
    .catch(err=>{
      res.send(err)
    })  
    }