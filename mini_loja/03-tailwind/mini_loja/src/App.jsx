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

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/manga?limit=20');
        const data = await response.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error('Erro ao buscar os mangás:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMangas();
  }, []);

  const mapToCartItem = (manga) => ({
    id: manga.mal_id,
    title: manga.title,
    imageUrl: manga.images?.jpg?.image_url || manga.images?.webp?.image_url || '',
    // Se seu ProductCard já envia price, pode ignorar essa linha.
    price: typeof manga.price === 'number' ? manga.price : gerarPrecoFake(manga.mal_id),
  });

  const gerarPrecoFake = (seed) => {
    const base = (seed % 50) + 10; // 10–59
    return Math.round(base * 1.9 * 100) / 100; // ~R$19–R$112
  };

  const handleAddToCart = (productToAdd) => {
    const item = productToAdd.id && productToAdd.price != null
      ? productToAdd
      : mapToCartItem(productToAdd);

    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((i) => i.id === id);
      if (idx === -1) return prev;
      const clone = [...prev];
      clone.splice(idx, 1);
      return clone;
    });
  };

  const toggleCart = () => setIsCartVisible((v) => !v);

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        cartItemCount={cartItems.length}
        onCartClick={toggleCart}
      />

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pt-28 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => <Skeleton key={index} />)
          : products.map((manga) => (
              <ProductCard
                key={manga.mal_id}
                product={manga}
                onAddToCart={handleAddToCart}
              />
            ))}
      </main>

      {isCartVisible && (
        <Cart
          cartItems={cartItems}
          onClose={toggleCart}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </>
  );
}

export default App;
