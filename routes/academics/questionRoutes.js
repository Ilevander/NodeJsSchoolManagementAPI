const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestion,
} = require("../../controller/academics/questionsController");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const questionsRouter = express.Router();


questionsRouter.post("/:examID", isTeacherLogin, isTeacher, createQuestion);
questionsRouter.get("/", isTeacherLogin, isTeacher, getQuestions);
questionsRouter.get("/:id", isTeacherLogin, isTeacher, getQuestion);


module.exports = questionsRouter;
