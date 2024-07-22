import express, { Router } from 'express'
const router = express.Router()
import { addHotel, allotHotel } from '../controllers/hotelController.js'
import { checkAdmin, checkToken } from '../middlewares/authMiddleware.js'

router.route('/').post(checkToken, checkAdmin, addHotel)
router.route('/info').put(checkToken, checkAdmin, allotHotel)

export default Router