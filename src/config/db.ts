import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = 'mongodb+srv://erikdev:gVCbKDbshOoekUvB@cluster0.vm92e.mongodb.net/DevTreeDB?retryWrites=true&w=majority'
        const { connection } = await mongoose.connect(url)
        const url2 = `${connection.host}:${connection.port}`
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}


