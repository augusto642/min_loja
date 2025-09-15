import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};
  }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
`;

export default GlobalStyle;
