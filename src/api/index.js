import { Router } from 'express'

import students from './students'
import departments from './departments'
import faculties from './faculties'

import subjects from './subjects'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
 router.use('/faculties',faculties)
router.use('/subjects', subjects)

export default router
