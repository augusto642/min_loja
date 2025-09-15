import React, { useMemo } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const Cover = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
`;

const Content = styled.div`
  padding: 0.75rem;
  display: grid;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-weight: 700;
  line-height: 1.25;
  font-size: 1rem;
  margin: 0;
`;

const Meta = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`;

const Price = styled.span`
  font-weight: 800;
  font-size: 1.05rem;
`;

const currencyBRL = (n) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

const ProductCard = ({ product, onAddToCart }) => {
  const cover = product?.images?.jpg?.image_url || product?.images?.webp?.image_url || "";
  const title = product?.title || "Título indisponível";
  const score = product?.score ?? "—";
  const type = product?.type || "Manga";
  const year = product?.year || (product?.published?.from ? new Date(product.published.from).getFullYear() : "—");

  const price = useMemo(() => {
    const seed = Number(product?.mal_id || 0);
    const base = 14.9;
    const spread = (seed % 3500) / 100;
    return Math.round((base + spread) * 100) / 100;
  }, [product?.mal_id]);

  const cartItem = { id: product?.mal_id, title, imageUrl: cover, price };

  return (
    <Card>
      <Cover src={cover} alt={title} loading="lazy" />
      <Content>
        <Title title={title}>{title}</Title>
        <Meta>
          <span>{type}</span>
          <span>•</span>
          <span>Ano: {year}</span>
          <span>•</span>
          <span>Nota: {score}</span>
        </Meta>
        <PriceRow>
          <Price>{currencyBRL(price)}</Price>
          <Button onClick={() => onAddToCart(cartItem)}>Adicionar</Button>
        </PriceRow>
      </Content>
    </Card>
  );
};

export default ProductCard;
