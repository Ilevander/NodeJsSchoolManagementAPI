//To protect the request to do login into server (Middleware)
const isLogin = (req, res, next) => {
    const isLogin = req.userAuth;
    console.log(req.userAuth);
    //Servers are statusless , dont remember the login , so we have to tell the server that the login has been already done
    //thats why we should use cookies, sessions or web tokens
    if(isLogin)
           {
             next();
           }
            else 
                {
                    const err = new Error('You are not login');
                    next(err);
                }
};


module.exports = isLogin;