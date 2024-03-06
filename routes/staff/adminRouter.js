const express = require('express');
const {registerAdminController, getAllAdmins, loginAdminController, getAdminProfileByIdController, updateAdminController, deleteAdminController, suspendTeacherController, unsuspendTeacherController, withdrawTeacherController, unwithdrawTeacherController, publishExamTeacherController, unpublishExamTeacherController} = require("../../controller/staff/adminController");
const isLogin = require('../../middlewares/isLogin');
const isAdmin = require('../../middlewares/isAdmin');
const adminRouter = express.Router();

//POST : Register Admin
adminRouter.post("/register" , registerAdminController);

//POST : Login Admin
adminRouter.post("/login" , loginAdminController);

//GET : All Admin
adminRouter.get("/" ,isLogin, getAllAdmins);

//GET : Single Admin
//Protecting the URL with the isLogin Middleware
adminRouter.get("/profile" ,isLogin , isAdmin, getAdminProfileByIdController );

//UPDATE : Login Admin
adminRouter.put("/" ,isLogin, isAdmin, updateAdminController);

//DELETE : Admin
adminRouter.delete("/:id" , deleteAdminController);

//ACTION : Admin Suspending teacher
adminRouter.put("/suspend/teacher/:id" , suspendTeacherController);

//ACTION : Admin Unsuspending teacher
adminRouter.put("/unsuspend/teacher/:id" , unsuspendTeacherController);

//ACTION : Admin Withdraw teacher
adminRouter.put("/withdraw/teacher/:id" , withdrawTeacherController);

//ACTION : Admin Unwithdraw teacher
adminRouter.put("/unwithdraw/teacher/:id" , unwithdrawTeacherController);

//ACTION : Admin Publish exam results of teacher
adminRouter.put("/publish/exam/:id" , publishExamTeacherController);

//ACTION : Admin Unpublish exam results of teacher
adminRouter.put("/unpublish/exam/:id" , unpublishExamTeacherController);


module.exports = adminRouter;