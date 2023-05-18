const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./databaseConfig')
const port =  5000;

const storyRoute = require("./routes/story.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config()
app.use(morgan("tiny"));
app.use(cors());

app.use("/stories",storyRoute);

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log(`> Server is up and running on: http://localhost:${port}`.rainbow.bgWhite));
connectDB();