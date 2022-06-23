import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    position: relative;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.default.text};
    background: ${({ theme }) => theme.default.background};
    font-family: /* Mudar a fonte aqui */ -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: smooth;
    z-index: 0;
  }

  html {
    font-size: 12px;
    height: 100%;
    -webkit-text-size-adjust: 100%;

    @media ${({ theme }) => theme.breakpoint.minTablet} {
      font-size: 14px;
    }

    @media ${({ theme }) => theme.breakpoint.minLaptop} {
      font-size: 16px;
    }
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth !important;
    min-height: 100%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    user-select: none;
  }

  button {
    font-family: "Poppins", sans-serif; //Mudar a fonte do botão aqui
    font-weight: 700;
    color: ${({ theme }) => theme.default.buttonText};
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    -webkit-appearance: none;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.purple};
    color: #fff;
  }

  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background-color: ${({ theme }) => theme.default.background};
    transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.default.scroll};
    border: 2px solid ${({ theme }) => theme.default.background};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`;

export default GlobalStyle;
