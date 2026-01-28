import type { NextFunction, Request, Response } from "express";

const roleMiddleware = (req:Request , res:Response , next:NextFunction) => {

   const ownerRole = req.user?.role
   if(ownerRole === "owner"){
    next();

   }else{
    return res.status(403).json("Forbidden : Owners can only access")

   }
           

}

export default roleMiddleware