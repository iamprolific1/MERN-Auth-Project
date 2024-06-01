import express from 'express';
import { register, login } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({message: "This is the index route"})
})

router.get('/register', register);
router.get('/login', login)
router.get('*', (req, res) =>{
    res.json({message: "This is the 404 route"})
})

export default router;