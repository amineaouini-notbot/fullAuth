require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const {json, urlencoded} = require('body-parser');

// setup cors to interact with front
app.use(cors())

// parse incoming request data
app.use(json())
app.use(urlencoded({extended: false}))


// run server
const PORT = process.env.NODE_ENV || 4000;
app.listen(PORT, ()=> console.log(`server is running on ${PORT}`));
