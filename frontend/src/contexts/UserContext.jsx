import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      console.log("hay user");
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setLoggedIn(true)
      console.log(user);
    }
  }, [loggedIn]);

  const value = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
