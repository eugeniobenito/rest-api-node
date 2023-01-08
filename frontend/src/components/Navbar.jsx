import {
  Box,
  Center,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { getRandomString } from "../utils/randomAvatar";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [avatar] = useState(getRandomString());
  const { user, setUser } = useContext(UserContext);
  const userName = user === null ? "null" : user.user.name;

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    window.localStorage.removeItem("loggedUser");
    navigateLogin();
  };

  const linkTuples = [
    ["Eventos", "/events"],
    ["Usuarios", "/users"],
  ];

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {loggedIn
                ? linkTuples.map(([name, slug]) => (
                    <Button
                      as={Link}
                      to={slug}
                      fontSize={"sm"}
                      colorScheme="blue"
                      variant="ghost"
                    >
                      {" "}
                      {name}
                    </Button>
                  ))
                : null}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              {!loggedIn ? (
                <>
                  <Button
                    as={Link}
                    to="/login"
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                  >
                    Sign In
                  </Button>
                  <Button
                    as={Link}
                    to="/signup"
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"blue.400"}
                    href={"#"}
                    _hover={{
                      bg: "blue.300",
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </Button>{" "}
                </>
              ) : (
                <>
                  <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </Button>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar size={"sm"} src={avatar} />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <br />
                      <Center>
                        <Avatar size={"2xl"} src={avatar} />
                      </Center>
                      <br />
                      <Center>
                        <p>
                          <strong>{userName}</strong>
                        </p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
