import { sendError, sendSuccess } from '../helpers/helper.js'
import prisma from '../prisma/index.js'
import { ERROR, SUCCESS } from '../utils/key.js'

/**
 * To get list of all languages  
 * method: get
 * url: /api/misc/lang
 * secured: false
 * 
 * @returns {Array} languages - list of all languages available on site
*/
export const getLanguages = async (req, res) => {
    try {
        const languages = await prisma.language.findMany()

        sendSuccess(res, SUCCESS, 'Languages', languages)
    } catch (error) {
        console.log(error);
        sendError(res, ERROR, 'Internal Server Error')
    }
}