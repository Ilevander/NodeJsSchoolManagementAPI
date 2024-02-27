const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect('url');
        console.log('DB Conection succcessfully.')
    }
    catch(error)
           {
            console.log('DB Connection failed', error.message)
           }
}

dbConnection();