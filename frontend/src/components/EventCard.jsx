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
  Box,
  Input,
  CloseButton,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useEditableControls,
  Flex,
  IconButton,
  useColorModeValue,
  SlideFade,
  Tooltip,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

async function obtainPhoto(city) {
  const city_url = city.toLowerCase().split(" ").join("-");
  const url =
    "https://api.teleport.org/api/urban_areas/slug:" + city_url + "/images/";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.photos[0].image.mobile;
  } catch (e) {
    console.log(e);
  }
}

async function deleteEvent(event_id) {
  const url = "http://localhost:3000/api/events/" + event_id;

  try {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    // return data.photos[0].image.mobile;
  } catch (e) {
    console.log(e);
  }
}

async function updateEvent(id, data) {
  const url = "http://localhost:3000/api/events/" + id;
  console.log(url);
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const data = await response.json();
    // return data.photos[0].image.mobile;
  } catch (e) {
    console.log(e);
  }
}

function EditableControls({ id, name, location, setImageUrl }) {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
  } = useEditableControls();

  const handleModifyEvent = async (e) => {
    e.preventDefault();
    updateEvent(id, { name, location });
    const imageUrl = await obtainPhoto(location);
    setImageUrl(imageUrl);
    console.log(id + name + location);

    // deleteEvent(event.id);
    // setEvents((prev) => prev.filter((e) => e !== event));
  };

  return isEditing ? (
    <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
      <IconButton
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
        onClick={handleModifyEvent}
      />
      <IconButton
        icon={<CloseIcon boxSize={3} />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : null;
}

export const EventCard = ({ event, events, setEvents }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState(event.name);
  const [location, setLocation] = useState(event.location);

  const getImageUrl = async () => {
    const imageUrl = await obtainPhoto(event.location);
    setImageUrl(imageUrl);
  };

  const handleDeleteEvent = () => {
    console.log("boton eliminar pulsado del evento " + event.id);
    deleteEvent(event.id);
    setEvents((prev) => prev.filter((e) => e !== event));
  };

  const handleModifyEventLocation = async ({ target }) => {
    setLocation(target.value);
  };

  const handleModifyEventName = async ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Box position="relative">
            <CloseButton
              ml="90%"
              position="absolute"
              onClick={handleDeleteEvent}
            />
            <Image
              src={imageUrl}
              alt="EL NOMBRE DE LA CIUDAD ES INCORRECTO"
              borderRadius="lg"
            />
          </Box>
          <Stack mt="6" mb="-8" spacing="3">
            {/* <Heading size="md">{name}</Heading> */}
            <Heading size="md">
              <Editable
                defaultValue={name}
                isPreviewFocusable={true}
                selectAllOnFocus={false}
              >
                <Tooltip label="Click to edit">
                  <EditablePreview
                    py={2}
                    px={4}
                    _hover={{
                      background: useColorModeValue("gray.100", "gray.700"),
                    }}
                  />
                </Tooltip>
                <Input
                  py={2}
                  px={4}
                  as={EditableInput}
                  onChange={handleModifyEventName}
                />
                <EditableControls
                  id={event.id}
                  name={name}
                  location={location}
                  setImageUrl={setImageUrl}
                />
              </Editable>
            </Heading>
            <Collapse in={isOpen} animateOpacity>
              {/* <Text>{event.location}</Text> */}
              <Editable
                defaultValue={location}
                isPreviewFocusable={true}
                selectAllOnFocus={false}
              >
                <Tooltip label="Click to edit">
                  <EditablePreview
                    py={2}
                    px={4}
                    _hover={{
                      background: useColorModeValue("gray.100", "gray.700"),
                    }}
                  />
                </Tooltip>
                <Input
                  py={2}
                  px={4}
                  as={EditableInput}
                  onChange={handleModifyEventLocation}
                />
                <EditableControls
                  id={event.id}
                  name={name}
                  location={location}
                  setImageUrl={setImageUrl}
                />
              </Editable>
            </Collapse>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={onToggle} variant="ghost" colorScheme="blue">
            Ver detalles
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
