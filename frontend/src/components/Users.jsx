import { useState, useEffect } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "./UserCard";

export const Users = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(window.localStorage.getItem("loggedUser"))["token"],
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrap>
      {users.map((user) => (
        <WrapItem key={user.id}>
          <UserCard user={user} />
        </WrapItem>
      ))}
    </Wrap>
  );
};
