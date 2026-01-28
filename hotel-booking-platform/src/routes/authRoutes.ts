import express from 'express'
import  { signup, signin } from '../controllers/authControllers.js';

const authRouter = express.Router();

authRouter.post("/api/auth/signup" , signup)
authRouter.post("/api/auth/signin" , signin )


export default authRouter;
