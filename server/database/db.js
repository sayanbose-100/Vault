import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
import Product from "../models/product.models.js";
import { products } from "../utils/constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MongoDB client connected !! DB Host: ${connectionInstance.connection.host}`);
    }
    catch(error) {
        console.log("MongoDB connection FAILED", error);
        process.exit(1);
    }
}

const seedProducts = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        
        // Insert new products
        const insertedProducts = await Product.insertMany(products);
        console.log('Products inserted:', insertedProducts);
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

export { connectDb, seedProducts };