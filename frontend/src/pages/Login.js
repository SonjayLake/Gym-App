import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password);
  }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email:</label>
      <input
        type="email"
        className="login-input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <label>Password:</label>

      <input
        type="password"
        className="login-input"
        autoComplete="current-password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <button disabled={isLoading}>Login</button>
      {error && <div>{error.message}</div>}
    </form>
  );
}
