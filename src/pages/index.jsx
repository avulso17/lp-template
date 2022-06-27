import { useEffect } from "react";

import Head from "next/head";

import { motion } from "framer-motion";

import { Navbar } from "../components/navbar";

import { Container, Grid } from "./styles";

export default function Home() {
  // function para retirar path da url
  function hashHandler() {
    window.history.pushState({}, "Page Title", "/");
  }

  useEffect(() => {
    window.addEventListener("hashchange", hashHandler, false);

    return () => window.removeEventListener("hashchange", hashHandler);
  });

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <motion.main
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Container>
          <Grid>
            <Navbar />
            <h1>Landing Page</h1>
          </Grid>
        </Container>
      </motion.main>
    </>
  );
}
