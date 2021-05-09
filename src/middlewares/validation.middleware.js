const { body, validationResult } = require('express-validator')


/** This method specify the validation rules for the 
 *  for user creation input form data
 */
const validationRulesCreate = () => {
  return [
    // name must be an string
    body('name').isString().notEmpty(),
    // email must be valid
    body('email').isEmail().notEmpty(),
    // country must be string
    body('country').isString().notEmpty(),
  ]
};

/** This method specify the validation rules for the 
 *  for user update input form data
 */
const validationRulesUpdate = () => {
    return [
      // name must be an string
      body('name').isString().optional(),
      // email must be valid
      body('email').isEmail().optional(),
      // country must be string
      body('country').isString().optional(),
    ]
};


/** This method enforces the validation rules
 * it returns a validation error message if any else it calls the next function
 * 
 * @param {Http Request} req 
 * @param {Http Response} res 
 * @param { func } next 
 */
const validator = (req, res, next) => {

    // Finds the validation errors in this request and wraps them in an object with handy function
  const errors = validationResult(req)

    // check if the error is empty
  if (!errors.isEmpty()) {

    // clean up the error messages
    const validationErrors = [];
    errors.array().map(err => validationErrors.push({ [err.param]: err.msg }));

    // return the error message to the user
    return res.status(422).json({
        errors: validationErrors,
    });
  };
 
    // calls the next function if there's no validation errors
  return next();

};


module.exports = {
    validationRulesCreate,
    validationRulesUpdate,
    validator,
}