import { Router} from "express";
import { body } from "express-validator"; 
import { createAccount } from "./handlers";

const router = Router()

// A U T H  &  R E G I S T R A T I O N
router.post('/auth/register', 
    body('handle')
        .notEmpty(),
        //.withMessage('Handle is required'),
    body('name')
        .notEmpty()
        .withMessage('Name is required'),
    body('email')
        .isEmail()
        .withMessage('Email is required'),
    body('password')
        .isLength({min: 8})
        .withMessage('Password must be at least 8 characters'),
    createAccount)

export default router