const express = require("express");
const {
  createQuestion,
  getQuestions,
} = require("../../controller/academics/questionsController");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const questionsRouter = express.Router();


questionsRouter.post("/:examID", isTeacherLogin, isTeacher, createQuestion);
questionsRouter.get("/", isTeacherLogin, isTeacher, getQuestions);


module.exports = questionsRouter;
