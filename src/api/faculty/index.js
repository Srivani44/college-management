import {Router} from 'express'
import { checkAuth } from '../helpers'

import {
    addData,
    show,
    index,
    update,
    deleteData,
    searchFaculty

} from './controller'

const router = new Router()

router.post('/',checkAuth(true,['ADMIN']),addData)

router.get('/:id',checkAuth(true), show)

router.get('/',checkAuth(true),index)

router.put('/:id',checkAuth(true,['ADMIN']),update)

router.delete('/:id',checkAuth(true,['ADMIN']),deleteData)

router.get('/search',checkAuth(true,['ADMIN']), searchFaculty)

export default router