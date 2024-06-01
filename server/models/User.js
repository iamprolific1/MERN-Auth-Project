import mongoose from 'mongoose';

//create user schema (defines structure of document within a collection).

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
    
}, {timestamps: true}); // timestamp true -(Each user is going to have to extra information, 1. Time of creation & 2. Time of edit)

const User = mongoose.model('User', userSchema);
export default User;