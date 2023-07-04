import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label>Email:</label>
      <input
        type="email"
        className="signup-input"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        className="signup-input"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>
      <button>Sign up</button>
    </form>
  );
}
