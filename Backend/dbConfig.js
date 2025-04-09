const mongoose = require("mongoose")
require("dotenv").config()
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}