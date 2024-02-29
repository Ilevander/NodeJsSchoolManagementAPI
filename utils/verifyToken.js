const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, 'mytopsecretkey' , (err, decoded) => {
        if(err)
            {
              return{
                        msg: "Invalid token",
                    };
            }
             else
                 {
                    return decoded;
                 }
    });
};

module.exports = verifyToken;