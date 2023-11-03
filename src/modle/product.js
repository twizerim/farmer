
 import mongoose from "mongoose";

 const proschemas = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    },
    produceAt:{
        type:String,
        required:true
    },
    epiresAt:{
        type:String,
        required:true
    },
 })
 const Product = mongoose.model("Product",proschemas)
 export default Product