import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#222",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 0",
        fontFamily: "'Fira Mono', monospace, Arial",
        fontWeight: "600",
        boxShadow: "0 2px 10px #0002"
      }}
    >
      <div style={{
        display: "flex",
        gap: "2.2rem",
        fontSize: "1.11rem",
        alignItems: "center"
      }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>Cart</Link>
        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
        <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Sign Up</Link>
      </div>
    </nav>
  );
}
