/* eslint-disable @next/next/next-script-for-ga */
import "../styles/global.css";

import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "theme";
import createEmotionCache from "util/createEmotionCache";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const baseUrl = "https://gnsscalc.com";

  const { pathname } = useRouter();

  const canonicalUrl = baseUrl + pathname;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="icons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="varheight" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="icons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="icons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="icons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="icons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="icons/mstile-310x310.png"
        />
        <meta
          name="description"
          content="GNSS Calculator is a tool to perform time conversions between different scales and several time computations."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": "${canonicalUrl}",
              "abstract": "GNSS Calculator is a tool to perform time conversions between different scales and several time computations.",
              "creator": "Webagentur varheight",
              "keywords": "GNSS, GNSS time calculator, GNSS calculator, time calculator, calculator"
            }`,
          }}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="GNSS Calculator is a tool to perform time conversions between different scales and several time computations."
        />
        <meta property="og:image" content="https://gnsscalc.com/img/icon.png" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:description"
          content="GNSS Calculator is a tool to perform time conversions between different scales and several time computations."
        />
        <meta
          property="twitter:image"
          content="https://gnsscalc.com/img/icon.png"
        />
        <meta property="twitter:url" content={canonicalUrl} />
        {/* GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-WS84WCL');`,
          }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
