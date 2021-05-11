// import the user model
const User = require('../models/user');


/** Create a user service function
 * 
 * @param {Object} entries 
 * @returns Object
 */
const create = async (entries) => {

    // check whether user already exists in the database using their email
    const checkUser = await User.findOne({ email: entries.email });

    if (checkUser) {
        // notify that user already exists
        return 'User already exists'
    }else{
        // create the user in the database
        const user = await User.create(entries);
        return user;
    }
};


/** Get a user service function
 * 
 * @param {Number} id 
 * @returns Object
 */
const get = async (id) => {
    // find the user in the database with that id
    const user = await User.findOne({ _id: id });
    return user;
};


/** Get all the users service function
 * 
 * @returns Array
 */
const getAll = async () => {
    // find all the user in the database
    const users = await User.find();
    return users;
}


/** Update a user service function
 * 
 * @param {Number} id 
 * @param {Object} entries 
 * @returns Object
 */
const update = async (id, entries) => {
    // update the user in the database
    await User.findByIdAndUpdate(id, entries);
    // fetch and return the updated user from the database
    const user = await User.findOne({ _id: id });
    return user;
};


/** Delete a user service function
 * 
 * @param {Number} id 
 */
const destroy = async (id) => {
    // delete the user with that id from the database
    const user = await User.findByIdAndRemove(id);
    return user;
};

// export all the functions
module.exports = {
    create,
    get,
    getAll,
    update,
    destroy,
};