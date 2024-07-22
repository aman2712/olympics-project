import express from 'express'
import { login, register, getAllDetails, getAllUsers } from '../controllers/userController.js'
const router = express.Router()

router.route('/').post(register)
router.route('/login').post(login)
router.route('/:id').get(getAllDetails)
router.route('/super').get(getAllUsers)

export default router