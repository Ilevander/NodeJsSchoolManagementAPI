const express = require('express');
const morgan = require('morgan');

const {globalErrorHandler, notFoundError} = require('../middlewares/globalErrorHandler');

const adminRouter = require("../routes/staff/adminRouter");
const academicYearRouter = require('../routes/academics/academicYearRouter');
const academicTermRouter = require('../routes/academics/academicTermRouter');
const classLevelRouter = require('../routes/academics/classLevelRouter');
const teachersRouter = require('../routes/staff/teachersRouter');
const programRouter = require('../routes/academics/programRouter');
const subjectRouter = require('../routes/academics/subjectsRouter');
const yearGroupRouter = require('../routes/academics/yearGroupRouter');
const examRouter = require('../routes/academics/examRoutes');
const studentRouter = require('../routes/staff/studentRouter');


const app = express();

//=========Middleware========
app.use(morgan("dev"));
app.use(express.json()); //pass incoming json data


// ===== USING Routes Express =====:
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years",academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/class-levels",classLevelRouter);
app.use("/api/v1/programs", programRouter);
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/year-groups", yearGroupRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/exams" , examRouter);
app.use("/api/v1/students" , studentRouter);

//Error middlewares : 
app.use(notFoundError);
app.use(globalErrorHandler);

 
module.exports = app;







