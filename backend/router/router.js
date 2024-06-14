import express from 'express';
import { signup } from '../controller/controller.js';

const router = express.Router();

router.post('/post', signup);

export default router;  
