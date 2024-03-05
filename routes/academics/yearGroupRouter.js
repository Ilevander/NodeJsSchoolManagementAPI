const express = require("express");

const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const { createYearGroup, getYearGroups, getYearGroup, updateYearGroup, deleteYearGroup } = require("../../controller/academics/yearGroupController");

const yearGroupRouter = express.Router();

yearGroupRouter
              .route("/")
              .post(isLogin,isAdmin,createYearGroup)
              .get(isLogin,isAdmin,getYearGroups);

yearGroupRouter
              .route("/:id")
              .get(isLogin,isAdmin,getYearGroup)
              .put(isLogin,isAdmin,updateYearGroup)
              .delete(isLogin,isAdmin,deleteYearGroup);

// yearGroupRouter.post("/", isLogin, isAdmin, createYearGroup);
// yearGroupRouter.get("/", isLogin, isAdmin, getYearGroups);
// yearGroupRouter.get("/:id", isLogin, isAdmin, getYearGroup);
// yearGroupRouter.put("/:id", isLogin, isAdmin, updateYearGroup);
// yearGroupRouter.delete("/:id", isLogin, isAdmin, deleteYearGroup);

module.exports = yearGroupRouter;
