import React from "react";
import styled from "styled-components";
import { BsSun, BsMoon, BsCart } from "react-icons/bs";

const Header = styled.header`
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
  padding: 0 1.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};
  &:hover { background-color: ${({ theme }) => theme.colors.tagBg}; }
`;

const CartBadge = styled.div`
  position: relative;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ theme, toggleTheme, cartItemCount, onCartClick }) => {
  return (
    <Header>
      <Container>
        <Logo>MangaStore</Logo>
        <Nav>
          <IconButton
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
          >
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </IconButton>

          <CartBadge onClick={onCartClick}>
            <BsCart />
            {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
          </CartBadge>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
