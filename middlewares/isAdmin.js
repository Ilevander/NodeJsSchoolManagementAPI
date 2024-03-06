const Admin = require("../model/Staff/Admin");

//To protect the request to do login into server (Middleware) and using authorization like token by jwt at headers of http req

const isAdmin = async (req, res, next) => {
   //Find the user
   const userId = req?.userAuth?._id; 
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