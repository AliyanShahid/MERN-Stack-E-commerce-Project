import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import {User} from "../models/User.js";

export const isAuthenticatedUser = asyncHandler(async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return next(new Error('Login first to access this resource'));
    }

    const decoded = jwt.verify(token, "ajdlajdlkasjdlkasjda");
    req.user = await User.findById(decoded._id);
    next();
});

