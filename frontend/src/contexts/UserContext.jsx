import { useState, createContext } from "react";

export const UserContext = createContext({
  loggedIn: false,
});

export function UserProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
  
    const value = {
      loggedIn,
      setLoggedIn,
    };
  
    return (
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    );
  }
  