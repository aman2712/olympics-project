import express from 'express'
import { getListOfGames, getSingleGame } from '../controllers/gamesController.js'
const router = express.Router()

router.route('/').get(getListOfGames)
router.route('/:id').get(getSingleGame)

export default router