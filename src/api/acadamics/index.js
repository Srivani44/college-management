import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchAcadamic
} from './controller'

const router = new Router()

router.post('/', create)

router.put('/:id', update)

router.get('/search', searchAcadamic)

router.get('/', index)

router.get('/:id', show)

router.delete('/:id', destroy)


export default router
