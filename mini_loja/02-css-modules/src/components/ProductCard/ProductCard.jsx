import React from 'react';
import Button from '../Button/Button';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onAddToCart }) => {
  const price = 34.90; 
  const item = { ...product, price: price, imageUrl: product.images.jpg.image_url };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.images.jpg.image_url} 
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        {product.type && <span className={styles.tag}>{product.type}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.details}>
          <span className={styles.price}>R$ {price.toFixed(2)}</span>
          <span className={styles.rating}>★ {product.score}</span>
        </div>
        <Button variant="outline" onClick={() => onAddToCart(item)}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;