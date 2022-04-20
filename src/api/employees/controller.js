import emp from './model'

export const create = (req,res)=>{

    const employee = req.body
    employee.createdBy =req.user.id
    
    emp.create(employee,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
        })
}


export const showProfile = (req,res)=>{
        emp.findOne({userId: req.user.id},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            console.log(result,req.user.id,'result')
            res.send(result)
        }
    })
}

export const show = (req,res)=>{
    emp.findById(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

 export const index = (req, res) =>
  sendAllEmployees(res);

export const update = (req,res)=>{
    emp.findByIdAndUpdate(req.params.id,req.body,{new :true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}

export const selfUpdate = (req,res)=>{
    const updateObj = {};
    if(req.body.name){
        updateObj['name']=req.body.name
    }
    if(req.body.gender){
        updateObj['gender']=req.body.gender
    }
    if(req.body.qualification){
        updateObj['qualification']=req.body.qualification
    }
    emp.findOneAndUpdate({userId:req.user.id},updateObj,{new :true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}

export const deleteData = (req,res)=>{
    emp.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}
export const searchEmployee = (req, res) => {
    emp.find({code:req.params.code},(err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    })
}

const sendAllEmployees = (res) => {
    emp.find({})
    .populate('faculty')
    .then(results=>{
      res.send(results)
    })
    .catch(err=>{
      res.send(err)
    })  
    }

    // const sendAllEmployees = (res) => {
    //     employees.find((er,employees)=>{
    //     if(!er){
    //         res.send(employees);
    //     }else{
    //         res.send(er);
    //     }
    //     })
       
    //     }
    