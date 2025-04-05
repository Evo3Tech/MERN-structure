import mongoose from 'mongoose'
// Testing database connection
export const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("error connecting to database", error);
        process.exit(1)
    }
}
