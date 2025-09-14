import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onClose }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button className="cart-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-price">R$ {item.price.toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button className="cart-checkout-btn">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;