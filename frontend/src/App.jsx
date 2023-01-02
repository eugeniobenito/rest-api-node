import { useState, useContext } from "react";
import LoginForm from "./components/LoginForm";
import loginService from "./services/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Events } from "./components/Events";
import { Greeting } from "./Greeting";
import { Users } from "./components/Users";
import { Box } from "@chakra-ui/react";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const [errormessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const user = await loginService.login({
  //       email: username,
  //       password,
  //     });

  //     window.localStorage.setItem("loggedUser", JSON.stringify(user));

  //     console.log(user);
  //     setUser(user);
  //     setUserName("");
  //     setPassword("");
  //   } catch (e) {
  //     setErrorMessage("Credenciales inválidas");
  //     setTimeout(() => {
  //       setErrorMessage(null);
  //     }, 5000);
  //   }

  //   console.log("Submit!!");
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   window.localStorage.removeItem("loggedUser");
  // };

  //   return (
  //     <LoginForm
  // username={username}
  // password={password}
  // handleUsernameChange={({ target }) => setUserName(target.value)}
  // handlePasswordChange={({ target }) => setPassword(target.value)}
  // handleSubmit={handleLogin}
  //     />
  //   );
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box p={4}>
          <Routes>
            <Route path="/" element={<Greeting />} />
            <Route
              path="/events"
              element={user ? <Events /> : <Navigate to="/login" />}
            />
            <Route
              path="/users"
              element={user ? <Users /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
