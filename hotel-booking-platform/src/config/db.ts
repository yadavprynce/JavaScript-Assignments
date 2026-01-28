import mongoose from "mongoose";
import ENV from "./env.js";


const mongoUri = ENV.DATABASE_URI;

async function connectToDb() {
    if (!mongoUri) {
        throw new Error("DatabaseUrL is not provided")
    }
    try {
        await mongoose.connect(mongoUri)
        console.log("DB connecton successful")
    } catch (e) {
        console.log("There is an error conecting Database")
        process.exit(1)
    }

}

export default connectToDb;