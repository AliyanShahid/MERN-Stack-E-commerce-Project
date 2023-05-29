import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/ProductRoutes.js';
import cartRoutes from './routes/CartRoutes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());

// app.get('/', async (req, res)  => {
//     const {data} = await  axios.get('https://api.escuelajs.co/api/v1/products');

//    await  Products.insertMany(data);

//     res.send(data[0]);
// });


app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/users', userRoutes)


app.use(notFound)
app.use(errorHandler)


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});