const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id} , 'mytopsecretkey', {expiresIn: '5d'});

}

module.exports = generateToken;
