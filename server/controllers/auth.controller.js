import User from "../models/User.js";
import bcrypt from 'bcrypt';
import createError from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12)
    if(!username || !email || !password){
        return res.status(401).json({message: "Null"});
    }
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save();
        res.status(200).json({message: "Registration Successful !!"});
    } catch (error) {
        return next(createError(500, "An error occurred during registration"));
    }
}

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const validateUser = await User.findOne({ username });
        if (!validateUser) return next(createError(404, "User Not Found!"));

        const validatePassword = await bcrypt.compare(password, validateUser.password);
        if (!validatePassword) return next(createError(401, "Please enter the correct credentials."));

        const token = jwt.sign({ id: validateUser._id }, process.env.ACCESS_TOKEN, { expiresIn: "2m" });
        const { password: hashedPassword, ...data } = validateUser._doc;

        res.cookie('token', token, {
            httpOnly: true,
            secure: true, 
            maxAge: 2 * 60 * 1000, 
            sameSite: 'strict'
        });
        console.log('Cookie set successfully');

        res.status(200).json({ message: "Authentication Successful", data, token });
    } catch (error) {
        return next(createError(500, "Internal Server Error"));
    }
};