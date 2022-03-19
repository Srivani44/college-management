import faculties from './model';
export const add = (req, res) => {
    faculties.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const getData = (req, res) =>
  faculties.find(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const searchGender = (req, res) => {
  faculties.find({gender:req.query.gender},(err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const searchQualification = (req, res) => {
  faculties.find({qualification:req.query.qualification},(err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
    faculties.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const deleteData = (req, res) =>
faculties.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(result);
    }
  }); 

  