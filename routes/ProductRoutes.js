import express from 'express';
import { Addproduct, LimitedProducts, categoryProducts, deleteProduct, getAllProducts, getProductById, searchProduct } from '../controllers/ProuctController.js';
const router = express.Router();


router.route('/getAllProducts').get(getAllProducts);
router.route('/getProductById/:id').get(getProductById);
router.route('/searchProduct').post(searchProduct)
router.route('/getFirstProducs').get(LimitedProducts);
router.route('/getCategoryProducts').post(categoryProducts);
router.route('/AddProduct').post(Addproduct);
router.route('/deleteProduct/:id').delete(deleteProduct);

export default router;