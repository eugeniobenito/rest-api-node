const User = require("../models/user");

const getUsers = async () => {
    const users = await User.findAll();
    return users;
}

const getUser = async (user_email) => {
    const user = await User.findOne({ where: { email: user_email } });
    console.log(`desde REPOSITORY con USER ${user}`);
    return user;
}

const createUser = async (user) => {
    const data = await User.create(user);
    return data;
}

const updateUser = async (user) => {
    const updated_user = await user.save();
}

const deleteUser = async (id) => {
    await User.destroy({
        where: {
            id,
        },
    });
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}