const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
} = require("../../controller/academics/questionsController");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const questionsRouter = express.Router();


questionsRouter.post("/:examID", isTeacherLogin, isTeacher, createQuestion);
questionsRouter.get("/", isTeacherLogin, isTeacher, getQuestions);
questionsRouter.get("/:id", isTeacherLogin, isTeacher, getQuestion);
questionsRouter.put("/:id", isTeacherLogin, isTeacher, updateQuestion);

module.exports = questionsRouter;
