// import and set up express
const express = require('express');
const app = express();

// allow app to use our environment variables
const dotenv = require('dotenv');
dotenv.config();

// import database connection and call connectDB function
const connectDB = require('./db/connection');
connectDB();

// set our app port
const PORT = process.env.PORT || 7000;

// import user routes
const userRoutes = require('./routes/users');

// parsing the request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup api endpoint routes
app.use('/api/v1/user', userRoutes);

// set app to listen to specified PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;