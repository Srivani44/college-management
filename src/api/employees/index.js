import {Router} from 'express'
import { checkAuth } from '../helpers'
import { myProfile } from '../students/controller'

import {
    create,
    show,
    index,
    update,
    deleteData,
    searchEmployee,
    showProfile,
    selfUpdate

} from './controller'

const router = new Router()

router.post('/',checkAuth(true,['ADMIN']),create)  //middleware functions

router.get('/my',checkAuth(true),showProfile)  //to check my profile data

router.get('/:id',checkAuth(true,['ADMIN','FACULTY']),show)

router.get('/',checkAuth(true,['ADMIN','FACULTY']),index)

router.put('/self-update',checkAuth(true),selfUpdate)

router.put('/:id',checkAuth(true,['ADMIN']),update)

router.delete('/:id',checkAuth(true,['ADMIN']),deleteData)

router.get('/search',checkAuth(true,['ADMIN','FACULTY']),searchEmployee)

export default router