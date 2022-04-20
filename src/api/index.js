import { Router } from 'express'

import students from './students'
import departments from './departments'
import faculty from './faculty'
import employees from './employees'
import subjects from './subjects'
import acadamics from './acadamics'
import marks from './marks'
import users from './users'

const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/faculties',faculty)
router.use('/employees',employees)
router.use('/subjects', subjects)
router.use('/acadamic',acadamics)
router.use('/marks',marks)
router.use('/users',users)

export default router
