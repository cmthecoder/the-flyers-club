import { Router } from 'express'
import * as planesCtrl from '../controllers/planes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



export {
  router
}