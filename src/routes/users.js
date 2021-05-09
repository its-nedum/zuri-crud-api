const express = require('express');
const userRoutes = express.Router();

// import the validation check middlewares
const { validationRulesCreate, validationRulesUpdate, validator } = require('../middlewares/validation.middleware')

// import user controller
const user = require('../controllers/userController');

// setup api CRUD routes
userRoutes.post('/create', validationRulesCreate(), validator, user.createUser); // create a new user endpoint
userRoutes.get('/get/:id', user.getUser);   // get a user endpoint
userRoutes.get('/getAll', user.getAllUsers); // get all users endpoint
userRoutes.put('/update/:id', validationRulesUpdate(), validator, user.updateUser); // update a user endpoint
userRoutes.delete('/destroy/:id', user.destroyUser); // delete a user endpoint

module.exports = userRoutes;