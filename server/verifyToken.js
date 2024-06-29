import jwt from 'jsonwebtoken'
import { createError } from './error.js'


export const verifyToken = (req, res, next) => {
    console.log('Cookies: ', req.cookies)

    const token = req.cookies.access_token
    if (!token){ 
        return next(createError(401, "NEUSPJELA AUTENTIFIKACIJA"));
        
    }
    
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, "Token je pogresan"))
        req.user = user
        next()
    })
}