const express = require('express');
const morgan = require('morgan');

const adminRouter = require("../routes/staff/adminRouter");
const {globalErrorHandler, notFoundError} = require('../middlewares/globalErrorHandler');

const app = express();

//=========Middleware========

app.use(morgan("dev"));
app.use(express.json()); //pass incoming json data

// ===== USING Routes Express =====:
app.use("/api/v1/admins", adminRouter);

//Error middlewares : 
app.use(notFoundError);
app.use(globalErrorHandler);


module.exports = app;

