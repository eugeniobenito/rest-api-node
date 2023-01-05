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
  CloseButton,
} from "@chakra-ui/react";

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

export const EventCard = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [imageUrl, setImageUrl] = useState("");

  const getImageUrl = async () => {
    const imageUrl = await obtainPhoto(props.event.location);
    setImageUrl(imageUrl);
  };

    useEffect(() => {
      getImageUrl();
  }, []);

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Box position="relative">
            <CloseButton ml="90%" position="absolute" />
            <Image
              src={imageUrl}
              alt="EL NOMBRE DE LA CIUDAD ES INCORRECTO"
              borderRadius="lg"
            />
          </Box>
          <Stack mt="6" mb="-8" spacing="3">
            <Heading size="md">{props.event.name}</Heading>
            <Collapse in={isOpen} animateOpacity>
              <Text>{props.event.location}</Text>
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
