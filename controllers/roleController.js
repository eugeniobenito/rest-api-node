const { handleHttp } = require("../utils/error.handle");
const roleService = require("../services/roleService");

const getRoles = async (req, res) => {
    try {        
        const roles = await roleService.getRoles();
        res.send(roles);
    } catch (e) {
        handleHttp(res, `ERROR_GET_ROLES ${e}`);
    }
}

const getUserRoles = async (req, res) => {
    try {
        console.log(`desde CONTROLLER ${req.params.user_email}`);
        const user = await roleService.getUserRoles(req.params.user_email);
        res.send(user);
    } catch (e) {
        handleHttp(res, "ERROR_GET_USER", 404);
    }
};

const addRole = async (req, res) => {
    try {
        console.log(`desde role CONTROLLER ${req.body.user_email}`);
        const user_role = await roleService.addRole(req.body);
        res.status(201).send({ user_role });
    } catch (e) {
        handleHttp(res, `ERROR_ADD_ROLE_USER ${e}`);
    }
};

module.exports = {
    getUserRoles,
    getRoles,
    addRole
}