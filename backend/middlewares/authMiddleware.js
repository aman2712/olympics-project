import jwt from 'jsonwebtoken'
import { sendError } from '../helpers/helper.js'
import { UNAUTHORISED } from '../utils/key.js'

export const checkToken = (req, res, next) => {
    let token = req.get('authorization')

    if(token){
        try {
            token = token.split(' ')[1]

            const user = jwt.verify(token, process.env.JWT_SECRET)

            req.user = user

            next()
        } catch (error) {
            sendError(res, UNAUTHORISED, 'Token failed, Unauthorized!')
        }
    }else{
        sendError(res, UNAUTHORISED, 'No token found, Unauthorized!')
    }
}

export const checkAdmin = (req, res, next) => {
    if(req.user.type === 'ADMIN' || req.user.type === 'SUPERADMIN'){
        next()
    }else{
        sendError(res, UNAUTHORISED, 'User not admin!')
    }
}

export const checkSuperAdmin = (req, res, next) => {
    if(req.user.type === 'SUPER_ADMIN'){
        next()
    }else{
        sendError(res, UNAUTHORISED, 'User not super admin!')
    }
}