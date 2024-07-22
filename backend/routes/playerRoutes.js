import express, { Router } from 'express'
const router = express.Router()
import { addSupportingInfo } from '../controllers/playerController.js'
import { checkToken } from '../middlewares/authMiddleware.js'

router.route('/player-info').put(checkToken, addSupportingInfo)

export default Router