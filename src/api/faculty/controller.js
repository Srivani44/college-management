import faculties from './model'

export const addData = (req,res)=>{
    faculties.create(req.body,(err,result)=>{
if(err){
    res.send(err)
}else{
    res.send(result)
}
})
}

export const getData = (req,res)=>{
    faculties.find(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

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
// }
// export const searchFaculty = (req, res) => {
//     Faculties.find({code:req.params.code},(err, results) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(results);
//       }
//     })

}