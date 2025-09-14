import React from 'react';
import { BsSun, BsMoon, BsCart } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>MangáStore</div>
        <nav className={styles.nav}>
          <button
            onClick={toggleTheme}
            className={styles.iconButton}
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? <BsMoon /> : <BsSun />}
          </button>
          
          <div className={styles.cartBadge} onClick={onCartClick} style={{cursor: 'pointer'}}>
            <BsCart />
            {cartItemCount > 0 && (
              <span className={styles.cartCount}>{cartItemCount}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;