const express = require('express');
const morgan = require('morgan');

const adminRouter = require("../routes/staff/adminRouter");
const academicYearRouter = require('../routes/academics/academicYearRouter');
const academicTermRouter = require('../routes/academics/academicTermRouter');


const {globalErrorHandler, notFoundError} = require('../middlewares/globalErrorHandler');



const app = express();

//=========Middleware========

app.use(morgan("dev"));
app.use(express.json()); //pass incoming json data

// ===== USING Routes Express =====:
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years",academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);

//Error middlewares : 
app.use(notFoundError);
app.use(globalErrorHandler);

 
module.exports = app;

