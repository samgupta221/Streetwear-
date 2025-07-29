
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{
      background: "#222", borderRadius: 14,
      padding: 16, color: "#fff", textDecoration: "none",
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <img src={product.image} alt={product.name} style={{width: "100%", maxWidth: 140, borderRadius: 8}} />
      <h3 style={{margin: "12px 0 4px"}}>{product.name}</h3>
      <p style={{color: "#f00"}}>${product.price}</p>
    </Link>
  );
}
