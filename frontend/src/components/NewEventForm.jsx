import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { useState } from "react";

export const NewEventForm = ({
  events,
  setEvents,
  eventsAdded,
  setEventsAdded,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, seName] = useState("");
  const [location, setLocation] = useState("");
  const baseUrl = "http://localhost:3000/api/events";

  const handleNameChange = ({ target }) => {
    seName(target.value);
  };

  const handleLocationChange = ({ target }) => {
    setLocation(target.value);
  };

  const handleCreateEvent = async (event) => {
    event.preventDefault();

    try {
      const data = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(window.localStorage.getItem("loggedUser"))["token"],
        },
        body: JSON.stringify({
          name,
          location,
        }),
      });

      setEvents([...events, data]);
      setEventsAdded(eventsAdded + 1);
      return event;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <>
      <Box mb="20px">
        <Button colorScheme="blue" onClick={onOpen}>
          Crear un evento
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <form onSubmit={handleCreateEvent}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Nuevo Evento</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="username">Nombre</FormLabel>
                    <Input
                      type="text"
                      placeholder="nombre"
                      onChange={handleNameChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="username">Ciudad</FormLabel>
                    <Input
                      type="text"
                      placeholder="nombre ciudad"
                      onChange={handleLocationChange}
                    />
                  </FormControl>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="blue" onClick={onClose}>
                Submit
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};
