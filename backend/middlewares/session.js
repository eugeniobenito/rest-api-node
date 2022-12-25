const { handleHttp } = require("../utils/error.handle");
const { verifyToken } = require("../utils/jwt.handle");

const authMiddleware = (req, res, next) => {
    try {

        if(!req.headers.authorization) {
            handleHttp(res, "NOT_SESSION", 401);
            return;
        }

        const token = req.headers.authorization.split(" ").pop();
        const dataToken = verifyToken(token);

        if(!dataToken.id) {
            handleHttp(res, "NOT_TOKEN_ID", 401);
            return;
        }

        next();

    } catch (e) {
        handleHttp(res, "NOT_SESSION", 401);
    }
}

module.exports = { 
    authMiddleware
}