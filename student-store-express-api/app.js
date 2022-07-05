const express = require("express");
const morgan= require("morgan");
//const routerApp = require("../student-express-api/routes/routes")
const cors = require("cors");

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

const exchange= require("./routes/routes");
const {NotFoundError}= require("./utils/error");
app.use("/routes",exchange);
app.get('/', async(req,res)=>{
    res.status(200).json({name:"Hey Gangy"})
})


app.use((req, res, next) => {
    return next(new NotFoundError());
  });


app.use((err,req, res, next)=>{
    const status = err.status;
    const message = err.message;

    return res.status(status).json({
        error: {message, status}
    })
});
module.exports = app;