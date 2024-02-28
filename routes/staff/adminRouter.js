const express = require('express');
const { model } = require('mongoose');

const adminRouter = express.Router();

//POST : Register Admin
adminRouter.post("/register" , (req,res) => {
        try
            {
                res.status(201).json({
                    status:'sucess',
                    data: 'Admin has been registred successfully'
                })
            }
            catch(err)
                    {
                        res.json({
                            status:'failed',
                            err: error.message,
                        });
                    }
});

//POST : Login Admin
adminRouter.post("/login" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin has been Logged successfully'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//GET : All Admin
adminRouter.get("/" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Get All Admins'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//GET : Single Admin
adminRouter.get("/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Get Single Admin'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//UPDATE : Login Admin
adminRouter.put("/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Update Admin'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//DELETE : Admin
adminRouter.delete("/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Delete Admin'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//ACTION : Admin Suspending teacher
adminRouter.put("/suspend/teacher/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin suspend teacher'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//ACTION : Admin Unsuspending teacher
adminRouter.put("/unsuspend/teacher/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin unsuspend teacher'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//ACTION : Admin Withdraw teacher
adminRouter.put("/withdraw/teacher/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin withdraw teacher'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//ACTION : Admin Unwithdraw teacher
adminRouter.put("/unwithdraw/teacher/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin unwithdraw teacher'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//ACTION : Admin Publish exam results of teacher
adminRouter.put("/publish/exam/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin publish exam result'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

//ACTION : Admin Unpublish exam results of teacher
adminRouter.put("/unpublish/exam/:id" , (req,res) => {
    try
        {
            res.status(201).json({
                status:'sucess',
                data: 'Admin unpublish exam result'
            })
        }
        catch(err)
                {
                    res.json({
                        status:'failed',
                        err: error.message,
                    });
                }
});

module.exports = adminRouter;