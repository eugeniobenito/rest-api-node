// export default function LoginForm(props) {
//   return (
//     <form onSubmit={props.handleLogin}>
//       <div>
//         <input
//           type="text"
//           value={props.username}
//           name="Username"
//           placeholder="Username"
//           onChange={props.handleUsernameChange}
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           value={props.password}
//           name="Password"
//           placeholder="Password"
//           onChange={props.handlePasswordChange}
//         />
//       </div>
//       <div>
//         <button>Login</button>
//       </div>
//     </form>
//   );
// }

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  InputGroup,
  InputLeftElement,
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
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  const navigateLogin = () => {
    console.log("navegando a login");
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
        console.log("venga va");
        navigateLogin();
      } else {
        setUser(user);
        setLoggedIn(true);
        console.log("usuario del contexto");
        console.log(user);
        setUserName("");
        setPassword("");
        navigateHome();
      }
    } catch (error) {
      // setErrorMessage("Credenciales inválidas");
      // setTimeout(() => {
      //   setErrorMessage(null);
      // }, 5000);
      console.log(error);
    }

    console.log("Submit!!");
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
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">¿Aún no estás registrado?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
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
                  {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" />
                    <Input
                      type="email"
                      placeholder="email address"
                      onChange={handleUsernameChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.300" />
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
                {/* <PasswordField /> */}
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
