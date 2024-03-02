const express = require('express');
const {regiterAdminController, getAllAdmins, loginAdminController, getAdminProfileByIdController, updateAdminController, deleteAdminController, suspendTeacherController, unsuspendTeacherController, withdrawTeacherController, unwithdrawTeacherController, publishExamTeacherController, unpublishExamTeacherController} = require("../../controller/staff/adminController");
const isLogin = require('../../middlewares/isLogin');
const adminRouter = express.Router();

//POST : Register Admin
adminRouter.post("/register" , regiterAdminController);

//POST : Login Admin
adminRouter.post("/login" , loginAdminController);

//GET : All Admin
adminRouter.get("/" , getAllAdmins);

//GET : Single Admin
//Protecting the URL with the isLogin Middleware
adminRouter.get("/profile" ,isLogin ,getAdminProfileByIdController );

//UPDATE : Login Admin
adminRouter.put("/:id" , updateAdminController);

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