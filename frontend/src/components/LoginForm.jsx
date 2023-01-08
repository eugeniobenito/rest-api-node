import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import loginService from "../services/login";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const { setLoggedIn } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const navigateEvents = () => {
    navigate("/events");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,
      });
    }
  };

  const handleUsernameChange = ({ target }) => {
    setUserName(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email: username,
        password,
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      if (user.error !== undefined) {
        navigateLogin();
      } else {
        console.log(user);
        setUser(user);
        setLoggedIn(true);
        setUserName("");
        setPassword("");
        navigateEvents();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Sign in to your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow="dark-lg"
          p="6"
          rounded="md"
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <form onSubmit={handleLogin}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <InputGroup>
                    <Input
                      type="email"
                      placeholder="Email"
                      onChange={handleUsernameChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={isOpen ? "text" : "password"}
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    />
                    <InputRightElement>
                      <IconButton
                        variant="link"
                        aria-label={
                          isOpen ? "Mask password" : "Reveal password"
                        }
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <HStack justify="space-between"></HStack>
              <Stack spacing="6">
                <Button
                  type="submit"
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.300",
                  }}
                >
                  Sign In
                </Button>{" "}
                <HStack></HStack>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginForm;
