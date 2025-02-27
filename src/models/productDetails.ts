import {Schema,model} from "mongoose";

interface Product{
    item:string,
    SKU:string,
    category:String,
    price:number,
    quantity:number,
    isListed:boolean,
}

const productSchema = new Schema<Product>({
    item:{
        type:String,
        required:true,
    },
    SKU:{
        type:String,
        required:true,
        unique:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    isListed:{
        type:Boolean,
        default:true,
    }
},{timestamps:true});

const ProductModel = model<Product>("Product",productSchema);
export {ProductModel}