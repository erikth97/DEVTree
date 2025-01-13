import { Router } from "express"
const router = Router ()

// A U T H  & R E G I S T E R 
router.post('/auth/register', (req, res) => {
    console.log('Desde Register')
})

// R O U T I N G

export default router;