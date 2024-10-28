import mongoose from "mongoose";

const recSchema = new mongoose.Schema({
    name: {type: String, required: true, default: "Hey"},
    email: String,
    password: String,
    phone: Number,
    comapnyName:String,
    comapnyWeb:String,
    designation:String,
    linkedin:String,
    desc:String,
});

export const recdata = mongoose.model('recdata', recSchema);