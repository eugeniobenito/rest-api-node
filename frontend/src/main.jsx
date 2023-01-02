import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { UserContextProvider } from "./contexts/UserContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <UserContextProvider>
      <App />
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
