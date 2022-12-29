export default function LoginForm(props) {
  return (
    <form onSubmit={props.handleLogin}>
      <div>
        <input
          type="text"
          value={props.username}
          name="Username"
          placeholder="Username"
          onChange={props.handleUsernameChange}
        />
      </div>
      <div>
        <input
          type="password"
          value={props.password}
          name="Password"
          placeholder="Password"
          onChange={props.handlePasswordChange}
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}
