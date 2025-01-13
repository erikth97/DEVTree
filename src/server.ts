import express from 'express'  // ESM Ecmascript modules
import router from './router';

const app = express()

// READ DATA FROM FORMS
app.use(express.json())

app.use('/', router)

export default app;