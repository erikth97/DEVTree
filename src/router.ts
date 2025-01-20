import { Router} from "express";
import { createAccount } from "./handlers";

const router = Router()

// A U T H  &  R E G I S T R A T I O N
router.post('/register', createAccount)

export default router 
