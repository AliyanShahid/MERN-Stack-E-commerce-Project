import { Cart } from "../models/Cart.js";


export const getAllCarts = async (req, res) => {

    try {
            
            const carts = await Cart.find({}).populate("products").populate("user");
            res.send(carts)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

}

export const getCartById = async (req, res) => {

    try {
        const cart = await Cart.findById(req.params.id).populate("products").populate("user");
        res.send(cart)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

}

export const createCart = async (req, res) => {
    
        try {
            const cart = await Cart.create(req.body);
            res.send(cart)
        }
        catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    
    }

export const updateCart = async (req, res) => {

    try{

        const cart = Cart.updateOne({_id: req.params.id}, req.body);
        res.send(cart)
    }

    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}

export const deleteCart = async (req, res) => {

    try{

        const cart = Cart.deleteOne({_id: req.params.id});
        res.send(cart)
    }

    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}

export const getUserCart = async (req, res) => {

    try{

        const cart = await Cart.find({user: req.params.id}).populate("products").populate("user");
        res.send(cart)
    }

    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}

export const addProductToCart = async (req, res) => {
    
        try{
    
            const cart = await Cart.findOne({_id: req.params.id});
            cart.products.push(req.body.product);
            await  cart.save();
            res.send(cart)
        }
    
        catch(error){
            console.log(error)
            res.status(500).json(error)
        }
    
    }

export const removeProductFromCart = async (req, res) => {

    try{

        const cart = await Cart.updateOne({_id: req.params.id}, {$pull: {products: req.body.productId}});
        res.send(cart)
    }

    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}

export const getLimitedCarts = async (req, res) => {
    
        try {
    
            const carts = await Cart.find({}).limit(10).populate("products").populate("user");
            res.send(carts)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ message: "Server Error" })
        }
    
    }

