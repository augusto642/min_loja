import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ product, onAddToCart }) => {
  const price = 34.90;
  const item = { ...product, price: price, imageUrl: product.images.jpg.image_url };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border dark:border-border">
      <div className="relative aspect-[2/3] bg-background">
        <img
          src={product.images.jpg.image_url}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {product.type && (
          <span className="absolute top-3 right-3 rounded bg-tag-bg px-2 py-1 text-xs font-bold text-text-primary">
            {product.type}
          </span>
        )}
      </div>
      {/* Container do conteúdo */}
      <div className="flex flex-grow flex-col p-4">
        <h3 className="h-14 overflow-hidden text-ellipsis font-semibold leading-tight [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {product.title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-text-primary">R$ {price.toFixed(2)}</span>
          <span className="text-text-secondary">★ {product.score}</span>
        </div>
        <div className="mt-4">
          <Button variant="outline" onClick={() => onAddToCart(item)}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;