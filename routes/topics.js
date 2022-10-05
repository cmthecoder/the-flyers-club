import { Router } from 'express'
import * as topicsCtrl from '../controllers/topics.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/', topicsCtrl.index)
router.get('/:id', topicsCtrl.show)
router.get('/:topicId/comments/:commentId/edit', isLoggedIn, topicsCtrl.edit)
router.post('/', isLoggedIn, topicsCtrl.create)
router.post('/:id/comments', isLoggedIn, topicsCtrl.createComment)
router.put('/:topicId/comments/:commentId', topicsCtrl.update)
router.delete('/:topicId/comments/:commentId', isLoggedIn, topicsCtrl.deleteComment)
export {
  router
}