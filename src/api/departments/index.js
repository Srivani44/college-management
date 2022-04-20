import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchDepartment

} from './controller'

const router = new Router()

//POST Request http://localhost:8080/departments
router.post('/',checkAuth(true,['ADMIN']), create)

//PUT Request http://localhost:8080/departments/123
router.put('/:id',checkAuth(true,['ADMIN']), update)

//GET Request http://localhost:8080/departments/search
router.get('/search',checkAuth(true), searchDepartment)

//GET Request http://localhost:8080/departments
router.get('/',checkAuth(true), index)

//GET Request http://localhost:8080/departments/123
router.get('/:id', checkAuth(true),show)

//DELETE Request http://localhost:8080/departments/123
router.delete('/:id', checkAuth(true,['ADMIN']),destroy)


export default router
