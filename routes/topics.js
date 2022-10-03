import { Router } from 'express'
import * as topicsCtrl from '../controllers/topics.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', topicsCtrl.index)
router.get('/:id', topicsCtrl.show)
router.post('/', isLoggedIn, topicsCtrl.create)
router.post('/:id/comments', topicsCtrl.createComment)

export {
  router
}