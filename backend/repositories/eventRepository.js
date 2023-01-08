const Event = require("../models/event");

const getEvents = async () => {
    const events = await Event.findAll();
    return events;
}

const createEvent = async (event) => {
    const data = await Event.create(event);
    return data;
}

const updateEvent = async (event) => {
    const updated_event = await Event.update({
        name: event.name,
        location: event.location,
    }, 
    {
        where: {
            id: event.id
        }
    });

    return event;
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
    deleteEvent,
    updateEvent
}