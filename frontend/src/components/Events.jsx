import { useState, useEffect } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { EventCard } from "./EventCard";
import { NewEventForm } from "./NewEventForm";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsAdded, setEventsAdded] = useState(0);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/events", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(window.localStorage.getItem("loggedUser"))["token"],
        },
      });
      const data = await response.json();
      setEvents(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [eventsAdded]);

  return (
    <>
      <NewEventForm
        events={events}
        setEvents={setEvents}
        eventsAdded={eventsAdded}
        setEventsAdded={setEventsAdded}
      />
      <Wrap>
        {events.map((event) => (
          <WrapItem key={event.id}>
            <EventCard event={event} events={events} setEvents={setEvents} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
