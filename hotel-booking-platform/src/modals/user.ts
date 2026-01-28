import mongoose from "mongoose";
import { required } from "zod/mini";
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {type:String , enum: ['customer', 'owner'] , default:'customer' },
    phone: { type: String },

},
    {
        timestamps: true
    })

const UserModel = mongoose.model('User', UserSchema)

export default UserModel