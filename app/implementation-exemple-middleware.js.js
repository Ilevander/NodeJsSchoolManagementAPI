const express = require('express');
const morgan = require('morgan');

const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//=========Middleware========

app.use(morgan("dev"));
app.use(express.json()); //pass incoming json data

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

//EXEMPLE AND IMPLEMENTATION: 
let user = {
    name: "Ilyass",
    isAdmin: false,
    isLogin: true, //if false:calling isLogin Middleware || if true:calling the isAdmin Middleware
};

const isLogin = (req,res,next) => {
    if(user.isLogin)
       {
        next();
       }
       else
            {
                res.status(401).json({
                    msg: "Unautorized",
                });
            }
};

const isAdmin = (req,res,next) => {
    if(user.isAdmin)
       {
        next();
       }
       else
            {
                res.status(401).json({
                    msg: "Unautorized , you are not admin",
                });
            }
};
//calling and using Middleware to SERVER:
app.use(isLogin,isAdmin);

// ===== USING Routes Express =====:

//POST : Admin Registration
app.use("/api/v1/admins", adminRouter);


module.exports = app;

