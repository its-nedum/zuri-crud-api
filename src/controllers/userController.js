// import user service functions
const { create, get, getAll, update, destroy } = require('../services/user.service');


/** Get a user controller
 * 
 * @api { post } /api/v1/user/create
 * @apiName Create a new user
 * 
 * @param {Http Request} req 
 * @param {Http Response} res 
 * @returns (201) {Object} mixed `User` object
 */
const createUser = async (req, res) => {
    // destructure the user details from the request body
    const { name, email, country } = req.body;

    // check that all fields are provided
    if (name && email && country) {

        try {
            // prepare the details to be saved
            const entries = {
                name,
                email,
                country
            };

            // pass the user details entries to the create user service function
            const user = await create(entries);

            // this will execute if for any reason the user wasn't created
            if (!user) {
                return res.status(400).json({
                    message: 'User not created, please try again'
                });
            };

            // this will execute if the user already exists in the database
            if (user === 'User already exists') {
                return res.status(400).json({
                    message: `User with email: ${email} already exists`
                });
            };

            // this will execute if the user creation was successful
            return res.status(201).json({
                message: 'User created successfully',
                data: user,
            });

        } catch(error) {
           // this will execute if there's an error with the request
            return res.status(500).json({
                error: error.message
            }); 
        };
    };

    // this will execute when the user id is not passed with the request
    return res.status(400).json({ message: 'Bad request, some required fields are blank' })
};



/** Get a user controller
 * 
 * @api { get } /api/v1/user/get/:id
 * @apiName Get a user
 * 
 * @param {Http Request} req 
 * @param {Http Response} res 
 * @returns (200) {Object} mixed `User` object
 */
const getUser = async (req, res) => {
    // destructure the user id from the request params
    const { id } = req.params;

    // check whether the user id is provided
    if (id) {

        try {
            // send the user id as parameter to the get user service function
            const user = await get(id);

            // this will execute if the user is not found
            if (!user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            };

            // this will execute if the user is found
            return res.status(200).json({
                message: 'User found',
                data: user,
            });

        } catch(error){
            // this will execute if there's an error with the request
            return res.status(500).json({
                error: error.message
            });
        };
    };

    // this will execute when the user id is not passed with the request
    return res.status(400).json({ message: 'Bad request, user ID not provided' })
};


/** Get all users controller
 * 
 * @api { get } /api/v1/user/getAll
 * @apiName Get all users
 * 
 * @param {Http Request} req 
 * @param {Http Response} res 
 * @returns (200) {Array} mixed `User` object
 */
const getAllUsers = async (req, res) => {
    try {
        // call the get all users service function
        const users = await getAll();

        // this will execute if no user is found
        if (!users || users.length === 0) {
            return res.status(404).json({
                message: 'Users not found'
            });
        }

        // this will execute if user is found
        return res.status(200).json({
            message: 'Users found',
            data: users,
        });

    } catch(error){
       // this will execute if there's an error with the request
        return res.status(500).json({
            error: error.message
        }); 
    };
};


/** Update a user controller
 * 
 * @api { put } /api/v1/user/update/:id
 * @apiName Update a user
 * 
 * @param {Http Request} req 
 * @param {Http Response} res 
 * @returns (200) {Object} mixed `User` object
 */
const updateUser = async (req, res) => {
    // destructure the user id from the request params
    const { id } = req.params;
    // destructure the new user info to update from the request body object
    const { name, email, country } = req.body;

    // create a store to hold the user entries
    const entries = {};

    // make the user details nullable
    if (name) entries.name = name;
    if (email) entries.email = email;
    if (country) entries.country = country;

    // check if the user id is provided
    if (id) {

        try {
            // pass the user id and details entries to the update user service function
            const user = await update(id, entries);

            // this will execute if for any reason the user wasn't updated
            if (!user) {
                return res.status(400).json({
                    message: 'User not updated, please try again'
                });
            }

            // this will execute if the user is updated successfully
            return res.status(200).json({
                message: 'User updated successfully',
                data: user,
            });

        } catch(error){
           // this will execute if there's an error with the request
            return res.status(500).json({
                error: error.message
            }); 
        }
    }

    // this will execute when the user id is not passed with the request
    return res.status(400).json({ message: 'Bad request, user ID not provided' })
};


/** Delete a user controller
 * 
 * @api { delete } /api/v1/user/destroy/:id
 * @apiName Delete a user
 * 
 * @param {Http Request} req 
 * @param {Http Response} res 
 * @returns (200) {Object} mixed `User` object
 */
const destroyUser = async (req, res) => {
    // destructure the id of the user to be deleted from the request params
    const { id } = req.params;

    // check if the user id is provided
    if (id) {

        try {
            // pass the user id to the destroy user service function to delete the user
            const user = await destroy(id);

            // this will execute if the user was not deleted
            if (!user) {
                return res.status(404).json({
                    message: 'User not found, please try again'
                });
            };

            // this will execute if the user was deleted successfully
            return res.status(200).json({
                message: 'User deleted successfully',
            });

        } catch(error) {
            // this will execute if there's an error with the request
            return res.status(500).json({
                error: error.message
            });
        };
    };

    // this will execute when the user id is not passed with the request
    return res.status(400).json({ message: 'Bad request, user ID not provided' });
};


// export all the controllers
module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    destroyUser,
};