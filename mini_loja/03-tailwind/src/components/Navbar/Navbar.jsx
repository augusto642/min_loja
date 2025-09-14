import React from 'react';
import { BsSun, BsMoon, BsCart } from 'react-icons/bs';

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick }) => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-surface px-6 shadow-md dark:border-b dark:border-border">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <div className="text-2xl font-bold text-text-primary">
          MangáStore
        </div>
        <nav className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-2xl text-text-primary transition-colors hover:bg-tag-bg"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? <BsMoon /> : <BsSun />}
          </button>
          <div 
            className="relative cursor-pointer text-2xl text-text-primary"
            onClick={onCartClick}
          >
            <BsCart />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-contrast">
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