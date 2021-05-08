// import mongoose
const mongoose = require('mongoose');

// set connection string
const connectionString = process.env.DB_URI;

// create connection function
const connectDB = async () => {
    try {
      await mongoose.connect(connectionString, {
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useFindAndModify: false,
        useCreateIndex: true
        });

        console.log('Database connection was successful...');

    } catch(err) {
        console.log(err);

        // exit with failure
        process.exit(1)
    }
    
}

module.exports = connectDB;