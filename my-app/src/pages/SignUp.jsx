import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async e => {
    e.preventDefault();
    setErr("");
    if(pass.length < 6) return setErr("Password too short!");
    if(pass !== confirm) return setErr("Passwords don't match!");
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    if(users.find(u => u.email === email))
      return setErr("Email already registered!");
    users.push({ email, password: pass });
    localStorage.setItem('users', JSON.stringify(users));
    // Log to Google Sheet
    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify({ email, activity: "signup" }),
      headers: { "Content-Type": "application/json" }
    });
    navigate('/login');
  };

  return (
    <div className="auth-bg">
      <form className="auth-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        {err && <div className="auth-error">{err}</div>}
        <label>Email
          <input type="email" value={email} autoComplete="username"
                 onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={pass} minLength={6} autoComplete="new-password"
                 onChange={e => setPass(e.target.value)} required />
        </label>
        <label>Confirm Password
          <input type="password" value={confirm} autoComplete="new-password"
                 onChange={e => setConfirm(e.target.value)} required />
        </label>
        <button type="submit">Create Account</button>
        <div className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
