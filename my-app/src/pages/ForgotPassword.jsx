import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  // Simulate sending OTP "to email"
  const handleRequestOtp = e => {
    e.preventDefault();
    setErr("");
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find(u => u.email === email);
    if(!user) return setErr("Email not found!");
    const gen = generateOTP();
    setSentOtp(gen);
    alert("OTP sent to your email: " + gen); // Show in alert for demo
    setStep(2);
  };

  const handleVerifyOTP = e => {
    e.preventDefault();
    if (otp === sentOtp) setStep(3);
    else setErr("Incorrect OTP.");
  };

  const handleReset = e => {
    e.preventDefault();
    if(password.length < 6) return setErr("Password must be at least 6 chars.");
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const idx = users.findIndex(u => u.email === email);
    users[idx].password = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert("Password reset. You may log in now.");
    // Log to Google Sheet
    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify({ email, activity: "reset" }),
      headers: { "Content-Type": "application/json" }
    });
    navigate('/login');
  };

  return (
    <div className="auth-bg">
      <form className="auth-form" onSubmit={
        step === 1 ? handleRequestOtp :
        step === 2 ? handleVerifyOTP :
        handleReset
      }>
        <h2>Forgot Password</h2>
        {err && <div className="auth-error">{err}</div>}
        {step === 1 && (
          <>
            <label>Email
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            </label>
            <button type="submit">Send OTP</button>
          </>
        )}
        {step === 2 && (
          <>
            <label>
              Enter OTP (Check alert - simulates email)
              <input type="text" value={otp} onChange={e=>setOtp(e.target.value)} required />
            </label>
            <button type="submit">Verify OTP</button>
          </>
        )}
        {step === 3 && (
          <>
            <label>
              New Password
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} />
            </label>
            <button type="submit">Reset Password</button>
          </>
        )}
      </form>
    </div>
  );
}
