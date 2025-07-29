import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./category.css";

export default function Category() {
  const { category } = useParams();
  const Capitalized = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  const items = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="cat-bg">
      <div className="cat-card">
        <h1 className="cat-title">{Capitalized} Collection</h1>
        {items.length === 0 ? (
          <div className="cat-empty">No products found in this category.</div>
        ) : (
          <div className="cat-grid">
            {items.map(product => (
              <Link to={`/product/${product.id}`} className="cat-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <span className="cat-price">${product.price}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
