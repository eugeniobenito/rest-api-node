const eventRepository = require("../repositories/eventRepository");

const getEvents = async () => {
   const events = await eventRepository.getEvents();
   return events;
} 

const createEvent = async (event) => {
   let final_event = {
       "name": event.name,
       "location": event.location
   };

   const new_event = await eventRepository.createEvent(final_event);

   return new_event;
} 

const deleteEvent = async (id) => {
  await eventRepository.deleteEvent(id);
}

module.exports = {
    getEvents, 
    createEvent,
    deleteEvent
}