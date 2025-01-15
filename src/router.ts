import { Router } from "express"
import User from "./models/User"

const router = Router ()

// A U T H  & R E G I S T E R 
router.post('/auth/register', async (req, res) => {
    const user = new User(req.body)
    
    await user.save()

    res.send('User Registered')
})

export default router;