const roleRepository = require("../repositories/roleRepository");

const getRoles = async () => {
    const roles = await roleRepository.getRoles();
    return roles;
}

const getUserRoles = async (user_email) => {
    const roles = await roleRepository.getRolesOfAnUser(user_email);
    return roles;
}

const addRole = async (user_role) => {
    const role = await roleRepository.addRole(user_role);    
    return role;
}; 

module.exports = {
    getUserRoles,
    getRoles,
    addRole
}