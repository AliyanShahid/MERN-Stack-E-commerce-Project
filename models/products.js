import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    category: {
       name : {
        type: String,
        required: true
       },
        id : {
          type: Number,
            required: true
        },

        image : {
            type: String,
            required: true
        }
    }

});

export const Products = mongoose.model('Products', schema);





