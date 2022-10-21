const { matchedData } = require("express-validator");
const { handleHttp } = require("../utils/error.handle")
const userService = require("../services/userService");
const { compare } = require("../utils/password.handle");
const { tokenSign } = require("../utils/jwt.handle");

const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await userService.getUser(req.email);

        if (!user) {
            handleHttp(res, "USER_NOT_EXIST", 404);
            return;
        }

        const hashedPassword = user.password;
        const check = await compare(req.password, hashedPassword);

        if (!check) {
            handleHttp(res, "INVALID_PASSWORD", 401);
            return;
        }

        const data = {
            token: tokenSign(user),
            user
        }

        res.send({ data });

    } catch (e) {
        handleHttp(res, `ERROR_LOGIN ${e}`);
    }
}

module.exports = {
    loginController
}