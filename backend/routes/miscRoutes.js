import express from 'express'
import { getLanguages } from '../controllers/miscController.js'
const router = express.Router()

router.route('/lang').get(getLanguages)

export default router