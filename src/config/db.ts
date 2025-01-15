import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan.bold(`MongoDB Connected at ${url}`))
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1)
    }
}