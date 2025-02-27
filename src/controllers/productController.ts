import {Request,Response} from "express";
import {ProductModel} from "../models/productDetails"
import { log } from "console";


class productController{

    static async loadProductList(req:Request,res:Response){
        try {
            const products = await ProductModel.find({isListed:true});
            res.render('productList',{products});
        } catch (error) {
            console.error(error);
        }
    }

    static async loadAddProduct(req:Request,res:Response){
        try{
            res.render('addProduct')
        }catch(error){
            console.error(error);            
        }
    }

    static async addProduct(req:Request,res:Response){
        try {
            const {item,SKU,category,price,quantity} = req.body;
            const newProduct = new ProductModel({
                item,
                SKU,
                category,
                price,
                quantity,
            });
            await newProduct.save();
            res.status(200).json({message:"success"});
        } catch (error) {
            console.error(error);            
        }
    }

    static async loadEditProduct(req:Request,res:Response){
        try {
            const {productId} = req.params;
            const product = await ProductModel.findOne({_id:productId});
            res.render('editProduct',{product});
        } catch (error) {
            console.error(error);
        }
    }

    static async editProduct(req:Request,res:Response){
        console.log(req.body);
        try {
            const {productId} = req.params;
            const {item,SKU,category,quantity,price} = req.body;
            await ProductModel.findByIdAndUpdate(productId,{
                item,
                SKU,
                category,
                price,
                quantity,
            },{new:true,runValidators:true});
            res.status(200).json({message:"success"});
        } catch (error) {
            console.error(error);            
        }
    }
    static async deleteProduct(req:Request,res:Response){
        try {
            const {productId} = req.params;
            await ProductModel.updateOne({_id:productId},{isListed:false});
            res.redirect('/');
        } catch (error) {
            console.error(error);            
        }
    }
}

export default productController;