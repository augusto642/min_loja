import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cartItems, onClose }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Seu Carrinho</h2>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.body}>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.mal_id}-${index}`} className={styles.item}>
                <img src={item.imageUrl} alt={item.title} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemPrice}>R$ {item.price.toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Total:</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutBtn}>Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;