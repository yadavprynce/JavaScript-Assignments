import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema ({
    userId:{type:mongoose.Schema.Types.ObjectId , ref:'User' , required:true},
    hotelId:{type:mongoose.Schema.Types.ObjectId , ref:'Hotel', required:true},
    bookingId:{type:mongoose.Schema.Types.ObjectId , ref:'Booking' , required:true},
    rating:{type:Number ,  enum:['1' ,'2' , '3' , '4' , '5']},
   comment:{type:String}
} , {
    timestamps:true
})

const ReviewModel = mongoose.model('Review' , ReviewSchema)

export default ReviewModel