import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-black-32x32.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-white-32x32.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-black-16x16.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-white-16x16.png" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#01080E" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
