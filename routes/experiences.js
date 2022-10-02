import { Router } from 'express'
import * as experiencesCtrl from '../controllers/experiences.js'


const router = Router()

router.get('/', experiencesCtrl.index)

export {
  router
}