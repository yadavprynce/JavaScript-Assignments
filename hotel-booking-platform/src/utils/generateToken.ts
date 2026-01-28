import jwt from 'jsonwebtoken'
import ENV from '../config/env.js'
import type { Request, Response } from 'express'


const generateToken = (userId: string, role: string , res:Response) => {
    const payload = {
        userId,
        role
    }
    const token = jwt.sign(payload, ENV.JWT_SECRET ,{
        expiresIn:"1h"
    })

    res.cookie("jwt" , token , {
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV === "production",
        maxAge: 60*60*1000
    })

    return token;  
}

export default generateToken