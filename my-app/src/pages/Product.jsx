import { Link } from "react-router-dom";
import "./product.css";

const products = [
  {
    id: "1",
    name: "Speedster Tee",
    image: "https://placehold.co/200x200?text=Tee+1",
    description: "F1 inspired bold look",
    price: 39,
  },
  {
    id: "2",
    name: "Pole Position Tee",
    image: "https://placehold.co/200x200?text=Tee+2",
    description: "Dynamic lines and high contrast",
    price: 42,
  },
  {
    id: "3",
    name: "Fast Lane Tee",
    image: "https://placehold.co/200x200?text=Tee+3",
    description: "Urban energy, race spirit",
    price: 35,
  }
 
];

export default function Products() {
  return (
    <main className="product-list-bg">
      <div className="product-list-card">
        <h1 className="product-list-title">All Products</h1>
        {products.length === 0 ? (
          <div className="product-list-empty">No products listed.</div>
        ) : (
          <div className="product-list-grid">
            {products.map(product => (
              <Link
                to={`/product/${product.id}`}
                className="product-list-carditem"
                key={product.id}
              >
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <div className="desc">{product.description}</div>
                <span className="price">${product.price}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
