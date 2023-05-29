import { Products } from "../models/products.js"

export const getAllProducts = async (req, res) => {

    try {

        const products = await Products.find({});
        res.send(products)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

}

export const getProductById = async (req, res) => {
    
        try {
    
            const product = await Products.findById(req.params.id);
            res.send(product)
        }
        catch (error) {
            console.log(error)
            res.status(500).json({ message: "Server Error" })
        }
    
    }


export const searchProduct = async (req, res) => {

    try {

        const products = await Products.find({ title: { $regex: req.body.title, $options: "i" } });
        res.send(products)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

}


export const LimitedProducts = async (req, res) => {

    try {

        const products = await Products.find({}).limit(10);
        res.send(products)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

}

export const categoryProducts = async (req, res) => {

    try {

        console.log(req.body.category)
        const products = await Products.find({'category.name' : req.body.category} );
        res.send(products)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

}

export const Addproduct = async (req, res) => {

    try{

        const product = new Products(req.body);
        await product.save();
        res.send(product);
    }

    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}

export const deleteProduct = async (req, res) => {

    try{

        const product = await Products.deleteOne({_id : req.params.id});
        res.send({message : "Product Removed"});
    }

    catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}