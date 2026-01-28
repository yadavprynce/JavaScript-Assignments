import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    ownerId:{type:mongoose.Schema.Types.ObjectId , ref:'User' },
    roomNo:{type:Number , required:true},
    name:{type:String , required:true},
    city:{type:String , required:true},
    country:{type:String, required:true},
    aminities:[],
    rating:Number,
    totalReviews:Number,
},{
    timestamps:true
})

const HotelModel = mongoose.model("Hotel" , HotelSchema)

export default HotelModel;