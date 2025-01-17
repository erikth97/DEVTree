import { Router } from "express"
import { createAccount } from "./handlers";


const router = Router ()

// A U T H  & R E G I S T E R 
router.post('/auth/register', createAccount)

export default router;