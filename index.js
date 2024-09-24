import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import connectDb from './config/db.js';
import router from './../backend/routes/userRoute.js'
// initialization
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',router)

const PORT=process.env.port||4000;

app.listen(PORT,()=>{
    connectDb()
    console.log(`server is runnig on http://localhost:${PORT}`);
})