const { check } = require("express-validator");
const validateResults = require("../utils/validator.handler");

const validatorCreateUser = [
    check("name").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("age").exists().notEmpty().isNumeric(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

const validatorGetUser = [
    check("id").exists().notEmpty().isNumeric(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = {
    validatorCreateUser,
    validatorGetUser
};