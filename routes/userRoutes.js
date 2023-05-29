import express from 'express';
import { deleteUser, getAllUsers, getUser, loginUser, logout, registerUser, updateUser } from '../controllers/userController.js';
const router = express.Router()


router.route('/register').post(registerUser);

router.route('/login').post(loginUser);
router.route('/getProfile').get(getUser);
router.route('/getUsers').get(getAllUsers);
router.route('/logout').get(logout);
router.route('/deleteUser/:id').delete(deleteUser);
router.route('/updateUser/:id').put(updateUser);



export default router;