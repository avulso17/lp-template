import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

import { theme } from "../styles/theme";

// importar as fontes aqui, caso use o fontsource

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
