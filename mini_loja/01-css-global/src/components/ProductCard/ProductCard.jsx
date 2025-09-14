import React from 'react';
import Button from '../Button/button';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const price = 34.90; 

  const item = {
    ...product,
    price: price,
    imageUrl: product.images.jpg.image_url 
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.images.jpg.image_url} 
          alt={product.title}
          className="product-card__image"
          loading="lazy"
        />
        {product.type && <span className="product-card__tag">{product.type}</span>}
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__details">
          <span className="product-card__price">R$ {price.toFixed(2)}</span>
          <span className="product-card__rating">★ {product.score}</span>
        </div>
        
        <Button variant="outline" onClick={() => onAddToCart(item)}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;