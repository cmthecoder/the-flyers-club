import { Router } from 'express'
import * as topicsCtrl from '../controllers/topics.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', topicsCtrl.index)
router.post('/', isLoggedIn, topicsCtrl.create)

export {
  router
}