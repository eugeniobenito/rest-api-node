const jwt = require("jwt-simple");
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = (user) => {
    const token = jwt.encode(
        {
            "id": user.id
        },
        JWT_SECRET,
    );

    return token;
};

const verifyToken = (tokenJWT) => {
    try {
        return jwt.decode(tokenJWT, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

module.exports = {
    tokenSign,
    verifyToken
}
