import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import Skeleton from './components/Skeleton/Skeleton';
import Cart from './components/Cart/Cart';
import { useTheme } from './hooks/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (productToAdd) => {
    setCartItems([...cartItems, productToAdd]);
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/manga?limit=20');
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Erro ao buscar os mangás:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMangas(); 
  }, []); 

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartItemCount={cartItems.length} onCartClick={toggleCart} />
      
      <main className="product-grid">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => <Skeleton key={index} />)
          : products.map((manga) => (
              <ProductCard key={manga.mal_id} product={manga} onAddToCart={handleAddToCart} />
            ))}
      </main>
      
      {isCartVisible && <Cart cartItems={cartItems} onClose={toggleCart} />}
    </>
  );
}

export default App;