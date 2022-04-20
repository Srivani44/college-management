import marks from './model';

export const create = (req, res) => {
    marks.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
marks.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllMarks(res);

export const searchMarks = (req, res) => {
  console.log(req.query);
  marks.find({ name: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
    marks.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
marks.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllMarks= (res) => {
    marks.find({})
    .populate('studentId subjectId acadamicYear')
  .then(results=>{
    res.send(results)
  })
  .catch(err=>{
    res.send(err)
  })  
  }