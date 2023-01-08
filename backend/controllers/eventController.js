const { handleHttp } = require("../utils/error.handle");
const eventService = require("../services/eventService");

const getEvents = async (req, res) => {
    try {
        const event = await eventService.getEvents();
        res.send(event);
    } catch (e) {
        handleHttp(res, `ERROR_GET_EVENTS ${e}`);
    }
};

const createEvent = async (req, res) => {
    try {
        const event = await eventService.createEvent(req.body);
        res.status(201).send({event});
    } catch (e) {
        handleHttp(res, `ERROR_CREATE_EVENT ${e}`);
    }
};

const deleteEvent = async (req, res) => {
    try {
        await eventService.deleteEvent(req.params.id);
        res.sendStatus(204);
    } catch (e) {
        handleHttp(res, `ERROR_DELETE_EVENT ${e}`);
    }
}

const updateEvent = async (req, res) => {
    try {
        const event = await eventService.updateEvent(req);
        res.status(201).send({event});
    } catch (e) {
        handleHttp(res, `ERROR_UPDATE_USER ${e}`);
    }
};

module.exports = { 
    getEvents, 
    createEvent,
    deleteEvent,
    updateEvent
};