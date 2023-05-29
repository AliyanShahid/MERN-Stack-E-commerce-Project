import mongoose from "mongoose";


const schema = new mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Products",
            required: true
        }
    ]

}, {
    timestamps: true
})


export const Cart = mongoose.model('Cart', schema);