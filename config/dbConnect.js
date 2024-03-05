const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connection successfully...(^_^)');
    }
    catch(error)
           {
            console.log('DB Connection failed', error.message)
           }
}

dbConnection();