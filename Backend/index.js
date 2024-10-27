const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
const cors = require("cors");
require("dotenv").config();
app.use(cors());

app.listen(port, () => {
    console.log('listening on port  ' + port);
})

app.get('/',cors(), (_, res) => {
    res.send('hello world')
})

// const dbConnect = require("./Config/db");
// dbConnect();

const setUserName = require("./Routes/SetUserName");

app.use("/v1", setUserName);
