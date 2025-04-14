import mongoose from "mongoose";

const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 1) return;
    try {
        // Connect to MongoDB
        console.log("Connecting to MongoDB...");
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
export default connectMongoDB;