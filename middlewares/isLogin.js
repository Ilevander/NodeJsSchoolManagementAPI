const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

//To protect the request to do login into server (Middleware)

const isLogin = async (req, res, next) => {
  //get token from header
  const headerObj = req.headers;
  // console.log(headerObj.authorization.split(" ")[1]);
  const token= headerObj?.authorization?.split(" ")[1];
  // const token = 
  //           headerObj && 
  //           headerObj.authorization && 
  //           headerObj.authorization.split(" ")[1];
  //verify token
  const verifiedToken = verifyToken(token);
  if(verifiedToken)
        {
          //find the admin
          const user = await Admin.findById(verifiedToken.id).select(
            "name email role"
          )
          //save the user into req.obj
          req.userAuth = user;
          next();
        }
        else
            {
              const err = new Error('Token expired/invalid');
              next(err);
            }
  //save the user into req.obj
    // const isLogin = req.userAuth;
    // console.log(req.userAuth);
    //Servers are statusless , dont remember the login , so we have to tell the server that the login has been already done
    //thats why we should use cookies, sessions or web tokens
    // if(isLogin)
    //        {
    //          next();
    //        }
    //         else 
    //             {
    //                 const err = new Error('You are not login');
    //                 next(err);
    //             }
};


module.exports = isLogin;