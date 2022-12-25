const Event = require("../models/event");

const getEvents = async () => {
    const events = await Event.findAll();
    return events;
}

const createEvent = async (event) => {
    const data = await Event.create(event);
    return data;
}

const deleteEvent = async (id) => {
    await Event.destroy({
        where: {
            id,
        },
    });
}

module.exports = {
    getEvents, 
    createEvent,
    deleteEvent
}