import { Router } from "express"
const router = Router ()

// A U T H  & R E G I S T E R 
router.post('/auth/register', (req, res) => {
    console.log(req.body)
})

export default router;