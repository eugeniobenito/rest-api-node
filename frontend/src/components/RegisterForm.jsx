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
import signupService from "../services/signup";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const { isOpen, onToggle } = useDisclosure();

  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
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

  const handleUserEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleUseAgeChange = ({ target }) => {
    setAge(target.value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const user = await signupService.signup({
        name,
        email,
        age,
        password,
      });

      navigateLogin();
    } catch (error) {
      navigateSignup();
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
              Register
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
          <form onSubmit={handleSignup}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Name"
                      onChange={handleUsernameChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type="number"
                      placeholder="Age"
                      onChange={handleUseAgeChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type="email"
                      placeholder="Email"
                      onChange={handleUserEmailChange}
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
                  Sign Up
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
