import { useState, createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    
    const value = {
      user,
      setUser,
      loggedIn,
      setLoggedIn
    };
  
    return (
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    );
  }
  