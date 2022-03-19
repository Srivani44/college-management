import { Router } from 'express'

import {
  add,
  getData,
 searchQualification,
 searchGender,
  update,
  deleteData,

} from './controller'

const router = new Router()

router.post('/', add)

router.get('/', getData)

router.get('/search-gender', searchGender)

router.get('/search-qualification', searchQualification)

router.put('/:id', update)

router.delete('/:id', deleteData)

export default router