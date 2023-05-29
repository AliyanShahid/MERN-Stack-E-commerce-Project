import express from 'express';
import { addProductToCart, createCart, deleteCart, getAllCarts, getCartById, getLimitedCarts, getUserCart, removeProductFromCart, updateCart } from '../controllers/CartController.js';
import { isAuthenticatedUser } from '../middleware/auth.js';

const router = express.Router();


router.route('/getAllCarts').get(isAuthenticatedUser,getAllCarts);
router.route('/getCartById/:id').get(isAuthenticatedUser,getCartById);
router.route('/createCart').post(isAuthenticatedUser,createCart);
router.route('/updateCart/:id').put(isAuthenticatedUser,updateCart);
router.route('/deleteCart/:id').delete(isAuthenticatedUser,deleteCart);
router.route('/AddProductToCart/:id').put(isAuthenticatedUser,addProductToCart);
router.route('/deleteProductFromCart/:id').put(isAuthenticatedUser,removeProductFromCart);
router.route('getLimitedCarts').get(isAuthenticatedUser,getLimitedCarts)
router.route('/getCartByUserId/:id').get(isAuthenticatedUser,getUserCart);




export default router;