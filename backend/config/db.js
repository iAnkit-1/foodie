import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://foodieuser:foodiepass1234@cluster0.vizwlbk.mongodb.net/foodie').then(()=>console.log("DB Connected"));
}