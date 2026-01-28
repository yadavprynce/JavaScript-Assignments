import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import ENV from "../config/env.js";

//Defining the shape of my jwt payload

interface Tokenpayload {
    id:string,
    role:string
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    else if (req.cookies?.jwt) {
        token = req.cookies.jwt
    }

    if (!token) {
        return res.status(400).json("No token provided")
    }


    try {
        const decoded = jwt.verify(token, ENV.JWT_SECRET ,{})
        req.user = decoded as Tokenpayload;
        next();
    } catch (e) {
       return  res.status(403).json("Invalid Token")

    }
}

export default authMiddleware;