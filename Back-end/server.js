import express from "express";
import articleRoute from './routes/articleRoute.js';
import adminRoute from './routes/adminRoute.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());

app.use('/articles', articleRoute);
app.use('/admins', adminRoute);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${ process.env.PORT }`)
})