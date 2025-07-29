import { Link } from "react-router-dom";
import "./home.css";

const categories = [
  { name: "Tees" },
  { name: "Jackets" },
  { name: "Caps" },
  { name: "Accessories" },
  { name: "Limited" }
];

export default function Home() {
  return (
    <main className="home-bg">
      <section className="home-hero">
        <h1 className="home-title">F1-Inspired Streetwear</h1>
        <p className="home-subtitle">Race-ready style, city comfort.</p>
        <Link to="/products" className="home-viewall-btn">
          View All Products
        </Link>
      </section>
      <section className="home-category-section">
        <h2 className="home-category-header">Shop by Category</h2>
        <div className="home-categories">
          {categories.map(({ name }) =>
            <Link
              key={name}
              to={`/category/${name.toLowerCase()}`}
              className="home-category-card clickable"
            >
              {name}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
