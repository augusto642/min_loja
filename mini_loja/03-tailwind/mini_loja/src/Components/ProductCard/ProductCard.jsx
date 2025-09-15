import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ product, onAddToCart }) => {
  // Extraindo as propriedades do produto, incluindo o preço dinâmico
  const { title, images, type, score, price } = product;
  const imageUrl = images?.jpg?.image_url || images?.webp?.image_url;

  const item = { ...product, price: price || 34.90, imageUrl };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border dark:border-border">
      <div className="relative aspect-[2/3] bg-background">
        <img
          src={imageUrl}
          alt={`Imagem do produto ${title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {type && (
          <span className="absolute top-3 right-3 rounded bg-tag-bg px-2 py-1 text-xs font-bold text-text-primary">
            {type}
          </span>
        )}
      </div>
      <div className="flex flex-grow flex-col p-4">
        <h3 className="h-14 overflow-hidden text-ellipsis font-semibold leading-tight [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-text-primary">R$ {item.price.toFixed(2)}</span>
          <span className="text-text-secondary">★ {score}</span>
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
