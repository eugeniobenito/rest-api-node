import { useState, useContext } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Events } from "./components/Events";
import { Users } from "./components/Users";
import { Box } from "@chakra-ui/react";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box p={4}>
          <Routes>
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
            <Route
              path="/signup"
              element={user ? <Navigate to="/events" /> : <RegisterForm />}
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
