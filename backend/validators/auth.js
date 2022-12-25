const { check } = require("express-validator");
const validateResults = require("../utils/validator.handler");

const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorLogin
};