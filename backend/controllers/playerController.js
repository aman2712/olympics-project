import fieldValidator from "../helpers/fieldValidator.js"
import { sendError, sendSuccess } from "../helpers/helper.js"
import { UNACCEPTABLE, ERROR, SUCCESS } from "../utils/key.js"

/**
 * for players to add their supporting details
 * method: put
 * url: /api/users/player-info
 * secured: true
 * 
 * @returns {Object} user - updated user
*/
export const addSupportingInfo = async (req, res) => {
    try {
        const { flight_number, landing_time, state, game } = req.body

        const check = fieldValidator({flight_number, landing_time, state, game})
        if(check.error){
            return sendError(res, UNACCEPTABLE, check.message)
        }

        const user = await prisma.user.update({
            where: {
                id: req.user.id
            },
            data: {
                flight_number,
                landing_time: new Date(landing_time),
                state,
                games_id: game
            }
        })

        return sendSuccess(res, SUCCESS, 'Details added successfully', user)
    } catch (error) {
        console.log(error);
        return sendError(res, ERROR, 'Internal Server Error')
    }
}