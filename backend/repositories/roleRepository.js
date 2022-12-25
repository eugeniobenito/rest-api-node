const Role = require("../models/role");

const getRoles = async () => {
    const roles = await Role.findAll();
    return roles;
}

const  addRole = async (user_role) => {
    const role = await Role.create(user_role);
    return role;
};

const getRolesOfAnUser = async (user) => {
    const roles = await Role.findAll({
        where: {
            user_email: user
        }
    });

    return roles;
}

const userAlreadyExistsWithARole = async (user_role) => {
    const role = await Role.findAll({
        where: {
            user_email: user_role.email,
            role: user_role.role
        }
    });

    console.log(`REPOISTORY ROOOOL ${role}`);

    return role;
}

module.exports = {
    userAlreadyExistsWithARole,
    getRolesOfAnUser,
    getRoles,
    addRole
}