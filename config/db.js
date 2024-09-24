import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
    } catch (error) {
        console.log('An error occured',error);
        process.exit(1);
    }
}

export default connectDb;
