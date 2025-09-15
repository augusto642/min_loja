import React from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
`;

const Panel = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.surface};
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Body = styled.div`
  flex: 1;
  padding: 1rem;
  overflow: auto;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto auto; /* + botão remover */
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  align-items: center;
`;

const Thumb = styled.img`
  width: 64px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
`;

const ItemTitle = styled.h4`
  margin: 0;
  font-size: 0.95rem;
`;

const Price = styled.span`
  font-weight: 700;
`;

const RemoveBtn = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition},
              color ${({ theme }) => theme.transition},
              border-color ${({ theme }) => theme.transition},
              transform ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(1px);
  }
`;

const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
  transition: opacity ${({ theme }) => theme.transition};
  &:hover { opacity: 0.9; }
`;

const Cart = ({ cartItems, onClose, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Overlay onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Seu Carrinho</Title>
          <CloseBtn onClick={onClose} aria-label="Fechar">×</CloseBtn>
        </Header>

        <Body>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cartItems.map((item) => (
              <Item key={item.id}>
                <Thumb src={item.imageUrl} alt={item.title} />
                <ItemTitle>{item.title}</ItemTitle>
                <Price>R$ {item.price.toFixed(2)}</Price>
                <RemoveBtn onClick={() => onRemoveItem?.(item.id)} aria-label={`Remover ${item.title}`} title="Remover">
                  <BsTrash />
                </RemoveBtn>
              </Item>
            ))
          )}
        </Body>

        {cartItems.length > 0 && (
          <Footer>
            <Total>
              <span>Total:</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </Total>
            <CheckoutButton>Finalizar Compra</CheckoutButton>
          </Footer>
        )}
      </Panel>
    </Overlay>
  );
};

export default Cart;
