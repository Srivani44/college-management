import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchStudent,
  myProfile,
  myUpdate

} from './controller'

const router = new Router()

router.post('/',/*checkAuth(true,['ADMIN'])*/create)

router.put('/self-update',checkAuth(true),myUpdate)

router.put('/:id',checkAuth(true,['ADMIN']),update)

//to check my profile
router.get('/me',checkAuth(true),myProfile)

router.get('/search',checkAuth(true),searchStudent)

router.get('/',/*checkAuth(true)*/index)

router.get('/:id',checkAuth(true),show)

router.delete('/:id'/*checkAuth(true,['ADMIN'])*/,destroy)


export default router
