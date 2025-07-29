import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    setErr("");
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const found = users.find(u => u.email === email && u.password === pass);
    if(found) {
      localStorage.setItem('sessionUser', email);
      // Log to Google Sheet
      fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify({ email, activity: "login" }),
        headers: { "Content-Type": "application/json" }
      });
      navigate("/");
    } else setErr("Invalid email or password.");
  };

  return (
    <div className="auth-bg">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {err && <div className="auth-error">{err}</div>}
        <label>Email
          <input type="email" value={email} autoComplete="username"
                 onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={pass} autoComplete="current-password"
                 onChange={e => setPass(e.target.value)} required />
        </label>
        <button type="submit">Log In</button>
        <div className="auth-link">
          <Link to="/forgot">Forgot password?</Link>
        </div>
        <div className="auth-link">
          No account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
