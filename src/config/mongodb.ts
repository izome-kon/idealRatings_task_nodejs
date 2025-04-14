import mongoose from "mongoose";

/**
 * Establishes a connection to the MongoDB database using the URI specified
 * in the environment variable MONGO_URI. If a connection is already established,
 * it does nothing. Logs the connection status to the console and handles any
 * connection errors by logging them.
 */

const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 1) return;
    try {
        // Connect to MongoDB
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
export default connectMongoDB;