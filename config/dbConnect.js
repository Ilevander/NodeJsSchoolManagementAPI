const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.psar3hp.mongodb.net/NodeJsSchoolManagement?retryWrites=true&w=majority&appName=Cluster0");
        console.log('DB Conection succcessfully.')
    }
    catch(error)
           {
            console.log('DB Connection failed', error.message)
           }
}

dbConnection();