import { Link } from "react-router-dom";

export default function CategoryCard({ category, clickable }) {
  if (clickable)
    return (
      <Link to={category.route} style={{
        padding: 32,
        minWidth: 140,
        background: "rgba(20,20,20,0.8)",
        border: "2px solid #f00",
        color: "#fff",
        borderRadius: 12,
        fontWeight: 700,
        transform: "skewX(-10deg)",
        textAlign: "center",
        textDecoration: "none",
      }}>
        {category.name}
      </Link>
    );
  return (
    <div style={{
      padding: 32,
      minWidth: 140,
      background: "rgba(20,20,20,0.8)",
      border: "2px solid #555",
      color: "#888",
      borderRadius: 12,
      fontWeight: 700,
      opacity: 0.7,
      transform: "skewX(-10deg)",
      textAlign: "center"
    }}>
      {category.name}
    </div>
  );
}
