import { GTM_ID } from "lib/gtm";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_WORDPRESS_URL} />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_WORDPRESS_URL} />
        <link rel="preconnect" href="www.googletagmanager.com" />
        <link rel="dns-prefetch" href="www.googletagmanager.com" />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
