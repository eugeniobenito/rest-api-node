const { handleHttp } = require("../utils/error.handle");
const userService = require("../services/userService");
const { matchedData } = require("express-validator");

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.send(users);
    } catch (e) {
        handleHttp(res, `ERROR_GET_USERS ${e}`);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        res.send(user);
    } catch (e) {
        handleHttp(res, "ERROR_GET_USER", 404);
    }
};

const createUser = async (req, res) => {
    try {
        const body = matchedData(req);
        const user = await userService.createUser(body);
        res.status(201).send({user});
    } catch (e) {
        handleHttp(res, `ERROR_CREATE_USER ${e}`);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req);
        res.status(201).send({user});
    } catch (e) {
        handleHttp(res, `ERROR_UPDATE_USER ${e}`);
    }
};

const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.sendStatus(204);
    } catch (e) {
        handleHttp(res, `ERROR_DELETE_USER ${e}`);
    }
}

module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser,
    deleteUser 
};