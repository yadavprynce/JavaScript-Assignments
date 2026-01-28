import {z} from 'zod'

const UserValidator = z.object({
    name:z.string(),
    email:z.email(),
    password:z.string().min(6,"Pasword must be minimum 6 characters")
    .max(12 , "Password can't be longer than 12 characters")
    .regex(/^(?=.*[A-Z])(?=.*\d).+$/ , "Password must contain atleast one number and one uppercase.")
    .regex(/[^a-zA-Z0-9]/ , "Password must contain one special Character") ,
    role:z.enum(["customer" , "owner"]).default('customer') ,
    phone:z.string().regex(/^\+91\d{10}$/).optional()
})


export default UserValidator ;