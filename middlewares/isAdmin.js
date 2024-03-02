const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

//To protect the request to do login into server (Middleware)

const isAdmin = async (req, res, next) => {
   //Find the user
   const userId = req.userAuth._id
   const adminFound = await Admin.findById(userId);
   //Check if admin
   if(adminFound?.role === 'admin')
            {
                next();
            }
            else    
                {
                    next(new Error('Access Denied , admin only'));
                }
};


module.exports = isAdmin;