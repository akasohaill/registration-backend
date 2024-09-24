import { User } from "../models/userSchema.js";

export const createUser=async (req,res)=>{
    try {
        const {name,addresses}=req.body;
        const user=new User({name,addresses});
        await user.save();
        res.status(200).json({msg:"User Created"})
    } catch (error) {
        console.log('An error occured',error);
        res.status(500).json({message:'Error occured'})
    }
}