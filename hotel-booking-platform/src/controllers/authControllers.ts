import type { Request, Response } from "express";
import UserValidator from "../validators/validateUser.js";
import UserModel from "../modals/user.js";
import bcrypt from 'bcrypt'
import generateToken from "../utils/generateToken.js";



const signup = async (req: Request, res: Response) => {
    //get the data from user
    const parsedBody = UserValidator.safeParse(req.body);

    if (!parsedBody.success) {
        return res.json({ message: "Invalid format" })
    }

    const { name, email, password, role, phone } = parsedBody.data;

    //now we have to check if that email exists

    const existingUser = await UserModel.findOne({ email })

    if (existingUser) {
        return res.json({ message: "Email already exists" })
    }

    //we will have to hash our password
    try {

        const hashedpassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            name, email, password: hashedpassword, role, phone: phone ?? null
            // phone:phone ?? null ... we are doing this cuz mongo returns phone's type as string | null
            //and zod as string | undefined , which creates conflict
            //there are many solutions to it one is this 
        })


        return res.status(200).json(parsedBody)

    } catch (e) {
        return res.status(400).json({
            error: "INVALID_REQUEST"
        })

    }

}

const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userExists = await UserModel.findOne({ email })

    if (!userExists) {
        return res.status(409).json("This email is not registerd with us")
    }

    const matchPassword = await bcrypt.compare(password, userExists.password)

    if (!matchPassword) {
        res.status(401).json({
            "success": false,
            "data": null,
            "error": "INVALID_CREDENTIALS"
        })
    }

    try {
        const token = generateToken(userExists.id, userExists.role, res)


        //whatever youu have to return would be manually acc to what u asked to
        return res.status(200).json({
            success: true,
            data: {
                token,
                user: {
                    id: userExists.id,
                    name: userExists.name,
                    email: userExists.email,
                    role: userExists.role
                }
            },
            error: null
        })

    } catch (e) {
        return res.status(400).json({
            "success": false,
            "data": null,
            "error": "INVALID_REQUEST"
        })

    }

}


export { signup, signin };