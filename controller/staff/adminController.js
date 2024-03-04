//to separate the business logic and taking dispatching roles from adminRouter
// ENDPOINTS
const AsyncHandler = require("express-async-handler");
const Admin = require("../../model/Staff/Admin");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");
const bcrypt = require('bcryptjs'); 

//@desc : Register Admin
//@route : POST /api/admins/register
//@access Private
exports.regiterAdminController = AsyncHandler(async (req,res) => {
    const {name , email , password } = req.body;
            //Check if email exists
            const adminFound = await Admin.findOne({email});
            if(adminFound)
                  { 
                    throw new Error("Admin Exists");
                  }
                  //Hashing password before registering the user
                  const salt = await bcrypt.genSalt(10);
                  const passwordHash = await bcrypt.hash(password, salt);
                  //registration:
                  const user = await Admin.create({
                    name,
                    email,
                    password: passwordHash,
                  });
                res.status(201).json({
                    status:'success',
                    data: user,
                    message: 'Admin registered successfully'
                });
});

//@desc :  Login Admin
//@route : POST /api/admins/login
//@access Private
exports.loginAdminController = AsyncHandler(async (req,res) => {
    const {email, password} = req.body;
            //find user
            const user = await Admin.findOne({email});
            if(!user)
               {
                return res.json({message: "Invalid login credentials, USER NOT FOUND"});
               }
               //Verify the password: 
               const isMatched =  await bcrypt.compare(password , user.password);
               if(!isMatched)
                        {
                            return res.json({message: "Invalid login credentials"});
                        }
                        else
                              {
                                 return res.json({
                                    data: generateToken(user._id),
                                    message:"Admin logged in successfully",
                                  });
                              }   
                         
                // if(user && (await user.verifyPassword(password)))
                //   {
                //     //Save the user into req object:
                //     //req.userAuth = user;
                //     // const token = generateToken(user._id)
                //     // const verify = verifyToken(token);
                //     //console.log(verify);
                //     return res.json({data: generateToken(user._id) ,
                //                       message:"Admin logged in successfully"
                //                     });
                //   }
                //    else 
                //        {
                //         return res.json({message: "Invalid login credentials !!"});
                //        }
                // res.status(201).json({
                //     status:'success',
                //     data: 'Admin has been Logged successfully'
                // })
});

//@desc : Get all Admins
//@route : GET /api/admins/
//@access Private
exports.getAllAdmins = AsyncHandler(async(req,res) => {
   const admins = await Admin.find();
   res.status(200).json({
    status: "success",
    message: "Admin fetched successfully",
    data: admins,
   });
});

//@desc : Get Single Admins
//@route : GET /api/admins/:id
//@access Private
exports.getAdminProfileByIdController = AsyncHandler(async(req,res) => {
    const admin = await Admin.findById(req.userAuth._id).select('-password -createdAt -updatedAt')
    console.log(req.userAuth);
    if(!admin)
            {
                throw new Error('Admin not found');
            }
             else
                 {
                    res.status(200).json({
                        status: "success",
                        data: admin,
                        message: 'Admin Profile fetched successfully'
                    });
                 }
});

//@desc:  Update Admins
//@route : PUT /api/admins/:id
//@access Private
exports.updateAdminController = AsyncHandler(async(req,res) => {
     const {email, name, password} = req.body;
     //Find the Admin:
     //const adminFound = await Admin.findById(req.userAuth._id);
     //if email is taken
     const emailExist = await Admin.findOne({email})
     if(emailExist)
                {
                    throw new Error('This email is taken /exist')
                }
                //Hashing password before registering the user
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(password, salt);
                //Check if the user is updating the password
                if(password)
                            {
                             //UPDATE:
                            const admin=  await Admin.findByIdAndUpdate(
                                req.userAuth._id , 
                                { email,
                                  password: passwordHash,  
                                  name,
                                 } , 
                                { 
                                    new: true, 
                                    runValidators: true,
                                });
                                    res.status(200).json({//means OK status
                                        status: 'success',
                                        data: admin,
                                        message: "Admin updated successfully",
                                    });
                            }         
});

//@desc : Update Admins
//@route : PUT /api/admins/:id
//@access Private
exports.deleteAdminController = (req,res) => {
    try
        {
            res.status(201).json({
                status:'success',
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
