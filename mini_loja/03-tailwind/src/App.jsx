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
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/manga?limit=24');
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (productToAdd) => setCartItems([...cartItems, productToAdd]);
  const toggleCart = () => setIsCartVisible(!isCartVisible);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} cartItemCount={cartItems.length} onCartClick={toggleCart} />
      
      <main className="mx-auto max-w-7xl px-6 pt-28 pb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)
          : currentItems.map((manga) => (
              <ProductCard key={manga.mal_id} product={manga} onAddToCart={handleAddToCart} />
            ))}
      </main>
      
      
      {isCartVisible && <Cart cartItems={cartItems} onClose={toggleCart} />}
    </>
  );
}

export default App;