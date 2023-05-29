import { User } from '../models/User.js'
import { sendToken } from '../utils/sendToken.js';


export const registerUser = (async (req, res) => {

    const { name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const user1 = await User.findOne({email})

    if(user1){
        res.status(409);
        throw new Error('User already exists');
    }


    const user = await User.create({
        name,
        email,
        password
    })

    sendToken(res,user,'User created successfully',201);

})



export const loginUser = (async (req, res) => {

    const { email, password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const user = await User.findOne({email}).select('+password');

    if(!user){
        res.status(404);
        throw new Error('Invalid credentials');
    }
    const isMatch =  await user.comparePassword(password);

    if(!isMatch){
        res.status(401);
        throw new Error('Invalid credentials');
    }
    
    sendToken(res,user,'User logged in successfully',200);

})

export const logout = (async (req, res) => {

    res.clearCookie('token');

    res.status(200).json({
        success: true,
        message: 'logged out successfully'
    })

    res.end();

})

export const getUser = (async (req, res) => {

    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user
    })
})



export const getAllUsers = (async (req, res) => {
    
        const users = await User.find();
    
        res.status(200).json({
            success: true,
            users
        })
    })


export const deleteUser = (async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send("User deleted successfully")
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

})

export const updateUser = (async (req, res) => {

    try {
            const user = await User.updateOne({ _id: req.params.id }, req.body);
            res.send(user)

    }
    catch (error) {

        console.log(error)
        res.status(500).json({ message: "Server Error" })
    }

})
