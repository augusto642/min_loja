import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import Skeleton from "./components/Skeleton/Skeleton";
import Cart from "./components/Cart/Cart";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";

const Page = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Spacer = styled.div`
  height: 80px;
`;

const ProductGrid = styled.main`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 481px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 769px) { grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 1025px) { grid-template-columns: repeat(4, 1fr); }
`;

function App() {
  const [themeName, toggleTheme] = useTheme();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (productToAdd) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === productToAdd.id);
      if (exists) return prev;
      return [...prev, productToAdd];
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCart = () => setIsCartVisible((v) => !v);

  useEffect(() => {
    async function fetchTopManga() {
      try {
        setIsLoading(true);
        const response = await fetch("https://api.jikan.moe/v4/manga?order_by=score&sort=desc&limit=20");
        const data = await response.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTopManga();
  }, []);

  const theme = themeName === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar
        theme={themeName}
        toggleTheme={toggleTheme}
        cartItemCount={cartItems.length}
        onCartClick={toggleCart}
      />
      <Spacer />
      <Page>
        <ProductGrid>
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => <Skeleton key={index} />)
            : products.map((manga) => (
                <ProductCard key={manga.mal_id} product={manga} onAddToCart={handleAddToCart} />
              ))}
        </ProductGrid>
      </Page>
      {isCartVisible && (
        <Cart
          cartItems={cartItems}
          onClose={toggleCart}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
