import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
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
      <button>Login</button>
    </form>
  );
}
