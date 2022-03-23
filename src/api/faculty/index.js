import {Router} from 'express'

import {
    addData,
    getData,
    update,
    deleteData
 

} from './controller'

const router = new Router()

router.post('/',addData)

router.get('/',getData)

router.put('/:id',update)

router.delete('/:id',deleteData)

// router.get('/search', searchFaculty)

export default router