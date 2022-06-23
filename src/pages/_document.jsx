/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Html, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="author" content="Nome do dev" /> {/* Mudar aqui */}
          <meta name="title" content={`Iconic Speedway`} />
          <meta
            name="description"
            content={`Iconic Speedway - Powered by SolaLand`}
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://iconic-speedway.vercel.app"
          />
          <meta property="og:title" content={`BearSol`} />
          <meta
            property="og:description"
            content={`Iconic Speedway - Powered by SolaLand`}
          />
          <meta property="og:image" content="/logo.png" /> {/* Mudar aqui */}
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://iconic-speedway.vercel.app"
          />
          <meta property="twitter:title" content={`Iconic Speedway`} />
          <meta
            property="twitter:description"
            content={`Iconic Speedway - Powered by SolaLand`}
          />
          <meta property="twitter:image" content="/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
