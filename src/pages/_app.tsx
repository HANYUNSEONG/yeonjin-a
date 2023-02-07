import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyle } from "theme/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
