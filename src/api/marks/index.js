import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchMarks
  
} from './controller'

const router = new Router()

router.post('/', create)

router.put('/:id', update)

router.get('/search', searchMarks)

router.get('/', index)

router.get('/:id', show)

router.delete('/:id', destroy)


export default router