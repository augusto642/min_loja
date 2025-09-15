import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const Cart = ({ cartItems, onClose, onRemoveItem }) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setOpen(false);
    setTimeout(() => onClose?.(), 300);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="fixed inset-0 z-[2000] flex justify-end bg-black/60"
      onClick={handleClose}
    >
      <div
        className={[
          "w-full max-w-[400px] h-full bg-[var(--color-surface)]",
          "flex flex-col shadow-[rgba(0,0,0,0.2)_-5px_0_15px]",
          "transition-transform duration-300",
          open && !closing ? "translate-x-0 ease-out" : "translate-x-full ease-in",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
          <h2 className="m-0 text-xl font-semibold">Seu Carrinho</h2>
          <button
            type="button"
            onClick={handleClose}
            className="text-3xl text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-transform duration-200 hover:scale-110 focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex gap-4 mb-4 p-2 rounded-[var(--border-radius)] hover:bg-[var(--color-hover)] transition-colors relative"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-[var(--border-radius)] flex-shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{item.title}</span>
                  <span className="mt-1 text-[var(--color-text-secondary)]">
                    {currency.format(item.price)}
                  </span>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 text-[var(--color-text-secondary)] hover:text-red-500 transition"
                  aria-label="Remover item"
                >
                  <FiX size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t border-[var(--color-border)]">
            <div className="flex items-center justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>{currency.format(totalPrice)}</span>
            </div>
            <button
              type="button"
              className="w-full py-3 text-base font-semibold rounded-[var(--border-radius)] border-0 cursor-pointer bg-[var(--color-primary)] text-[var(--color-primary-contrast)] transition-opacity hover:opacity-80"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
