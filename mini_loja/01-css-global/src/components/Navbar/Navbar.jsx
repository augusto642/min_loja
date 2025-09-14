import React from 'react';
import { BsSun, BsMoon, BsCart } from 'react-icons/bs';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick }) => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">MangaStore</div>
        <nav className="navbar__nav">
          <button
            onClick={toggleTheme}
            className="navbar__icon-button"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? <BsMoon /> : <BsSun />}
          </button>
          
          <div className="navbar__cart-badge" onClick={onCartClick} style={{cursor: 'pointer'}}>
            <BsCart />
            {cartItemCount > 0 && (
              <span className="navbar__cart-count">{cartItemCount}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;