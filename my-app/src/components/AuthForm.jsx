
import { useState } from "react";

export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form onSubmit={e => {e.preventDefault(); onSubmit({email, password});}}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e=> setEmail(e.target.value)}
        required
        style={{marginBottom: 8, width: "100%", padding: 8}}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e=> setPassword(e.target.value)}
        required
        style={{marginBottom: 8, width: "100%", padding: 8}}
      />
      <button type="submit" style={{width: "100%", padding: 8}}>
        {type === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}
