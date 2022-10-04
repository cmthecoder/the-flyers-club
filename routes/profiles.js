import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show )
router.get('/:profileId/planes/:planeId/edit', isLoggedIn, profilesCtrl.edit)
// "/profiles/<%= profile._id %>/planes/<%= plane._id %>/edit"
router.post('/:id/planes', isLoggedIn, profilesCtrl.createPlane)
router.put('/:profileId/planes/:planeId', profilesCtrl.update)
router.delete('/planes/:id', isLoggedIn, profilesCtrl.deletePlane)

export {
  router
}