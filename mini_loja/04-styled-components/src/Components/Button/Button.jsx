import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${({ $full }) => ($full ? "100%" : "auto")};
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transition},
    border-color ${({ theme }) => theme.transition},
    color ${({ theme }) => theme.transition},
    transform ${({ theme }) => theme.transition};

 
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(1px);
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const Button = ({ children, full = false, ...props }) => (
  <StyledButton $full={full} {...props}>{children}</StyledButton>
);

export default Button;
