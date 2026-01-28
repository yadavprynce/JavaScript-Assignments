import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    hotelId:{type:mongoose.Schema.Types.ObjectId , ref:"Hotel" , unique:true},
    roomNo:{type:Number , required:true , unique:true},
    roomType:{type:String,required:true},
    pricesPerNight:{type:Number, required:true },
    maxOccupency:Number
} , {
    timestamps:true
})

const RoomModel = mongoose.model('Room' , RoomSchema)

export default RoomModel;