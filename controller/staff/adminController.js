//to separate the business logic and taking dispatching roles from adminRouter
const Admin = require("../../model/Staff/Admin");

//@desc : Register Admin
//@route : POST /api/admins/register
//@access Private
exports.regiterAdminController = async (req,res) => {
    const {name , email , password } = req.body;
    try
        {
            //Check if email exists
            const adminFound = await Admin.findOne({email});
            if(adminFound)
                  {
                    res.json("Admin Already exists !!");
                  }
                  //registration:
                  const user = await Admin.create({
                    name,
                    email,
                    password,
                  });
                res.status(201).json({
                    status:'sucess',
                    data: user
                })
         }
            catch(err)
                    {
                        res.json({
                            status:'failed',
                            error: err.message,
                        });
                    }
};

//@desc :  Login Admin
//@route : POST /api/admins/login
//@access Private
exports.loginAdminController =  (req,res) => {
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
};

//@desc : Get all Admins
//@route : GET /api/admins/
//@access Private
exports.getAllAdmins = (req,res) => {
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
};

//@desc : Get Single Admins
//@route : GET /api/admins/:id
//@access Private
exports.getAdminByIdController = (req,res) => {
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
};

//@desc:  Update Admins
//@route : PUT /api/admins/:id
//@access Private
exports.updateAdminController = (req,res) => {
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
};

//@desc : Update Admins
//@route : PUT /api/admins/:id
//@access Private
exports.deleteAdminController = (req,res) => {
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
};

//@desc : Admin Suspend Teacher
//@route : PUT /suspend/teacher/:id
//@access Private
exports.suspendTeacherController = (req,res) => {
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
};

//@desc : Admin Unsuspend Teacher
//@route : PUT /unsuspend/teacher/:id
//@access Private
exports.unsuspendTeacherController = (req,res) => {
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
};

//@desc : Admin Withdraw Teacher
//@route : PUT /withdraw/teacher/:id
//@access Private
exports.withdrawTeacherController = (req,res) => {
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
};

//@desc : Admin Unwithdraw Teacher
//@route : PUT /unwithdraw/teacher/:id
//@access Private
exports.unwithdrawTeacherController = (req,res) => {
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
};

//@desc : Admin publish Teacher
//@route : PUT /publish/exam/:id
//@access Private
exports.publishExamTeacherController = (req,res) => {
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
};

//@desc : Admin unpublish Teacher
//@route : PUT /unpublish/exam/:id
//@access Private
exports.unpublishExamTeacherController = (req,res) => {
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
};





// module.exports = {
//     regiterAdminController,

// };
