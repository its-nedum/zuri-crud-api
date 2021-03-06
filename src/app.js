// import and set up express
const express = require('express');
const app = express();

// import the node.js path module
const path = require('path');

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

// setup user api endpoint routes
app.use('/api/v1/user', userRoutes);

// set static path to public folder
app.use(express.static(path.join(__dirname, 'public')));

// Send the public html page on home route.
app.get('/', (req, res) => {
  res.type('html').sendFile(path.join(`${__dirname}/public/index.html`));
});

// Send the public html page on home api route.
app.get('/api/v1', (req, res) => {
  res.redirect('/');
});

// set app to listen to specified PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;