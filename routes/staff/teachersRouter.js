const express = require("express");
const { adminRegisterTeacher } = require("../../controller/staff/teachersController");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const teachersRouter = express.Router();

teachersRouter.post("/admin/register", isLogin, isAdmin, adminRegisterTeacher);

module.exports = teachersRouter;
