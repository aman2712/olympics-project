import prisma from '../prisma/index.js'
import { sendError, sendSuccess } from '../helpers/helper.js'
import { ERROR, NOTFOUND, SUCCESS, UNACCEPTABLE, UNAUTHORISED } from '../utils/key.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fieldValidator from '../helpers/fieldValidator.js'

/**
 * To create a user and store in database  
 * method: post
 * url: /api/users
 * secured: true | admin
 * 
 * @returns {Object} user - user details and token for auth
*/
export const register = async (req, res) => {
    try {
        const { username, email, password, type } = req.body
        
        const check = fieldValidator({
            username, email, password, type
        })
        if(check.error){
            return sendError(res, UNACCEPTABLE, check.message)
        }
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS))
        const hash = bcrypt.hashSync(password, salt)

        const user = await prisma.user.create({
            data: {
                email,
                password: hash,
                username,
                type,
            }
        })

        const token = jwt.sign({...user, password: undefined}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })

        const data = {...user, password: undefined, token}
        
        return sendSuccess(res, SUCCESS, 'User created successfully', data)
    } catch (error) {
        console.log(error);
        return sendError(res, ERROR, 'Internal Server error')
    }
}

/**
 * To log in a user and generate a token  
 * method: post
 * url: /api/users/login
 * secured: false
 * 
 * @returns {Object} user - user details and token for auth
*/
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const check = fieldValidator({
            email, password
        })
        if(check.error){
            return sendError(res, UNACCEPTABLE, check.message)
        }
        
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user){
            return sendError(res, NOTFOUND, 'No such user found')
        }

        if(!bcrypt.compareSync(password, user.password)){
            return sendError(res, UNAUTHORISED, 'Password does not match')
        }

        const token = jwt.sign({...user, password: undefined}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })

        const data = {...user, password: undefined, token}
        
        return sendSuccess(res, SUCCESS, 'User logged in successfully', data)
    } catch (error) {
        console.log(error);
        return sendError(res, ERROR, 'Internal Server error')
    }
}

/**
 * To get all details of user including hotel and game
 * method: get
 * url: /api/users/:id
 * secured: false
 * 
 * @returns {Object} user - player details
*/
export const getAllDetails = async (req, res) => {
    try {
        const id = req.query.id

        const user = prisma.user.findUnique({
            where: {
                id
            },
            include: {
                hotel_info,
                game
            }
        })

        sendSuccess(res, SUCCESS, 'User details', user)
    } catch (error) {
        console.log(error);
        sendError(res, ERROR, 'Internal Server Error')
    }
}

/**
 * To get all details of all users in db
 * method: get
 * url: /api/users/super
 * secured: true | admin | super
 * 
 * @returns {Object} user - player details
*/
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                hotel_info: true,
                game: true
            }
        })

        sendSuccess(res, SUCCESS, 'Users', users)
    } catch (error) {
        console.log(error);
        sendError(res, ERROR, 'Internal Server Error')
    }
}