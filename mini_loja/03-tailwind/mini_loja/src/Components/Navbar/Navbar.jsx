import React from "react";
import { BsSun, BsMoon, BsCart } from "react-icons/bs";

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--color-surface)] shadow-[var(--shadow-md)] z-[1000] px-6">
      <div className="flex justify-between items-center h-20 max-w-[1280px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-[var(--color-text-primary)]">
          MangaStore
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-6">
          {/* Botão de tema */}
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"
            }
            className="text-[var(--color-text-primary)] text-2xl cursor-pointer p-2 rounded-full flex items-center justify-center transition-colors hover:bg-[var(--color-tag-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
          >
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </button>

          {/* Carrinho */}
          <div
            onClick={onCartClick}
            role="button"
            aria-label="Abrir carrinho"
            className="relative text-2xl cursor-pointer p-2 rounded-full transition-colors hover:bg-[var(--color-tag-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
          >
            <BsCart />
            {cartItemCount > 0 && (
              <span className="absolute -top-[5px] -right-[10px] bg-[var(--color-primary)] text-[var(--color-primary-contrast)] rounded-full w-5 h-5 text-[0.75rem] font-bold flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
