import { Router} from "express";
import { body } from "express-validator"; 
import { createAccount } from "./handlers";

const router = Router()

// A U T H  &  R E G I S T R A T I O N
router.post('/auth/register', 
    body('handle').notEmpty(),
    createAccount)

export default router