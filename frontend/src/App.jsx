import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import loginService from "./services/login";

function App() {
  const [errormessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email: username,
        password,
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      console.log(user);
      setUser(user);
      setUserName("");
      setPassword("");
    } catch (e) {
      setErrorMessage("Credenciales inválidas");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }

    console.log("Submit!!");
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedUser");
  };

  <LoginForm
    username={username}
    password={password}
    handleUsernameChange={({ target }) => setUsername(target.value)}
    handlePasswordChange={({ target }) => setPassword(target.value)}
    handleSubmit={handleLogin}
  />;
}

export default App;
