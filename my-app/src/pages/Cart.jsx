import { useState } from "react";
import "./cart.css";

const initialCart = [
  {
    id: "1",
    name: "Speedster Tee",
    price: 39,
    image: "https://placehold.co/80x80?text=Tee+1",
    qty: 2
  },
  {
    id: "2",
    name: "Pole Position Tee",
    price: 42,
    image: "https://placehold.co/80x80?text=Tee+2",
    qty: 1
  }
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const handleQty = (id, delta) => {
    setCart(curr =>
      curr
        .map(item =>
          item.id === id
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-bg">
      <div className="cart-card">
        <h2 className="cart-title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map(item => (
                <li className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div className="cart-info">
                    <div className="cart-name">{item.name}</div>
                    <div className="cart-item-price">${item.price}</div>
                  </div>
                  <div className="cart-qty-controls">
                    <button onClick={() => handleQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleQty(item.id, +1)}>+</button>
                  </div>
                  <div className="cart-line-total">
                    ${(item.qty * item.price).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span className="cart-subtotal-value">${subtotal.toFixed(2)}</span>
            </div>
            <button className="cart-checkout-btn">Proceed to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
