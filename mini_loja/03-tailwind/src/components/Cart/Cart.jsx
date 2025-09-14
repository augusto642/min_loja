// src/components/Cart/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, onClose }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-60" onClick={onClose}>
      <div 
        className="flex h-full w-full max-w-sm flex-col bg-surface shadow-xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-xl font-semibold">Seu Carrinho</h2>
          <button className="text-3xl text-text-secondary" onClick={onClose}>&times;</button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.mal_id}-${index}`} className="mb-4 flex gap-4">
                <img src={item.imageUrl} alt={item.title} className="h-20 w-20 rounded-md object-cover" />
                <div className="flex flex-col">
                  <span className="font-semibold">{item.title}</span>
                  <span className="mt-1 text-text-secondary">R$ {item.price.toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t border-border p-4">
            <div className="mb-4 flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-contrast transition-opacity hover:opacity-80">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;