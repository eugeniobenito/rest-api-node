import { useState, useEffect, useCallback } from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Image,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { EventCard } from "./EventCard";
import { NewEventForm } from "./NewEventForm";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsAdded, setEventsAdded] = useState(0);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/events");
      const data = await response.json();
      console.log("En events component esto es de typo " + typeof data[0]);
      setEvents(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("Ejecuntando fech events");
    fetchEvents();
  }, [eventsAdded]);

  return (
    <>
      <NewEventForm events={events} setEvents={setEvents} eventsAdded={eventsAdded} setEventsAdded={setEventsAdded}/>
      <Wrap>
        {events.map((event) => (
          <WrapItem key={event.id}>
            <EventCard event={event} />
          </WrapItem>
        ))}
      </Wrap>
    </>
    // <div>
    //   <ul>
    //     {events.map((event) => (
    //       <li key={event.id}>{event.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};
