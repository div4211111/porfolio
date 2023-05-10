import "@src/styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Andrew Alexeev</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
      </Head>

      <NextNProgress options={{ showSpinner: false }} color={"#4d5bce"} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
