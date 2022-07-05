const express = require("express");
const morgan= require("morgan");
//const routerApp = require("../student-express-api/routes/routes")
const cors = require("cors");

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.get('/', async(req,res)=>{
    res.status(200).json({name:"Hey Gangy"})
})

module.exports = app;