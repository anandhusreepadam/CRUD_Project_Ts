import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer();
import productController from "../controllers/productController"

router.get('/',productController.loadProductList);
router.get('/addProduct',productController.loadAddProduct);
router.post('/addProduct',productController.addProduct);
router.get('/editProduct/:productId',productController.loadEditProduct);
router.post('/editProduct/:productId',productController.editProduct);
router.get('/deleteProduct/:productId',productController.deleteProduct);

export default router;