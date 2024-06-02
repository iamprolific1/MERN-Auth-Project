import User from "../models/User.js";
import bcrypt from 'bcrypt';
import createError from "../utils/errorHandler.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12)
    if(!username || !email || !password){
        return res.status(401).json({message: "Null"});
    }
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save();
        res.status(200).json({message: "Body Content Inclusive & dat is saved successfull"});
    } catch (error) {
        const errorResponse = createError(401, "Invalid content")
        res.status(errorResponse.status).json(errorResponse);
    }
}
