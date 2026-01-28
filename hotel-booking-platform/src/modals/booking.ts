import mongoose from 'mongoose'


const Bookingschema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, required: true },
    roomId: { type:mongoose.Schema.Types.ObjectId, required: true },
    hotelId: { types:mongoose.Schema.Types.ObjectId, required: true },
    checkIndate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
    totalPrice: { type: Number, required: true },
    bookingDate: { type: Date, required: true },
    cancelledAt: Date,
}, {
    timestamps: true
})

const BookingModel = mongoose.model('Booking', Bookingschema)