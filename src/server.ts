import express from 'express'  
import 'dotenv/config'
import router from './router';
import { connectDB } from './config/db';

const app = express()

connectDB()

// READ DATA FROM FORMS
app.use(express.json())

app.use('/', router)

export default app;