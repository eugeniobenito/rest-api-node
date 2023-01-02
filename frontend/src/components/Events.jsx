import { useState, useEffect } from "react";
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

  async function fetchEvents() {
    try {
      const response = await fetch("http://localhost:3000/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
    <NewEventForm />
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
