const app = express();
const port = 3001;

// import setUserName from "./Routes/SetUserName.js";
import { recdata } from "./Models/recdata.js";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser"
import mongoose from "mongoose";

let conn = await mongoose.connect("mongodb://localhost:27017/UserData")

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log('listening on port  ' + port);
})

app.get('/',cors(), (_, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => { 
    console.log(req.body)
    const recd = new recdata(req.body)
    recd.save()
    res.send('Hello World!')
})