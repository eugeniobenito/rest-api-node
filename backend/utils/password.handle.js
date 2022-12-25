const bcryptjs = require("bcryptjs");

const encrypt = async (passwordWithoutCrypt) => {
    const hash = await bcryptjs.hash(passwordWithoutCrypt, 10);
    return hash;
};

const compare = async (passwordWithoutCrypt, hashedPassword) => {
    return await bcryptjs.compare(passwordWithoutCrypt, hashedPassword);
};

module.exports = {
    encrypt,
    compare
}