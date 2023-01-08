import { useState, useContext, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import loginService from "./services/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Events } from "./components/Events";
import { Greeting } from "./Greeting";
import { Users } from "./components/Users";
import { Box } from "@chakra-ui/react";
import { UserContext } from "./contexts/UserContext";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [errormessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

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
            <Route
              path="/login"
              element={user ? <Navigate to="/events" /> : <LoginForm />}
            />
            <Route path="/signup" element={<RegisterForm />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
