import { useState, createContext } from "react";
import { Events } from "../components/Events";

export const EventsContext = createContext();

export function EventsContextProvider(props) {
  const [events, setEvents] = useState([]);
  
  const addEvent = (event) => {
    console.log("events context")
    console.log(typeof(event))
    const eventoJSON = JSON.stringify(event)
    setEvents([...events, eventoJSON])
    return <Events />
    console.log(events)    
}

  const value = {
    events,
    addEvent,
    setEvents
  };

  return (
    <EventsContext.Provider value={value}>
      {props.children}
    </EventsContext.Provider>
  );
}
