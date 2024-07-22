import { sendError, sendSuccess } from '../helpers/helper.js'
import prisma from '../prisma/index.js'
import { ERROR, NOTFOUND, SUCCESS } from '../utils/key.js'

/**
 * To get list of all games  
 * method: get
 * url: /api/games
 * secured: false
 * 
 * @returns {Array} games - list of all games in event
*/
export const getListOfGames = async (req, res) => {
    try {
        const games = await prisma.game.findMany()

        return sendSuccess(res, SUCCESS, 'List of games', games)
    } catch (error) {
        console.log(error);
        return sendError(res, ERROR, 'Internal Server Error')
    }
}

/**
 * To get details of single game
 * method: get
 * url: /api/games/:id
 * secured: false
 * 
 * @returns {Object} game - details of single game
*/
export const getSingleGame = async (req, res) => {
    try {
        const id = req.query.id
        const game = await prisma.game.findUnique({
            where: {
                id
            },
            include: {
                types: true
            }
        })

        if(!game){
            return sendError(res, NOTFOUND, 'No such game exists!')
        }

        return sendSuccess(res, SUCCESS, 'Game found', game)
    } catch (error) {
        console.log(error);
        return sendError(res, ERROR, 'Internal Server Error')
    }
}