import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://sohailofficial52:DtW9rGooquxyU2Vy@cluster0.8lhbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Connected to DB');
        
    } catch (error) {
        console.log('An error occured',error);
        process.exit(1);
    }
}

export default connectDb;