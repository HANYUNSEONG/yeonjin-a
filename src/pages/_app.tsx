import { Global } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { globalStyle } from "theme/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <DefaultSeo
        title="멋지다 연진아~"
        description="더 글로리 - 멋지다 연진아~ 생성기"
        openGraph={{
          type: "website",
          images: [
            {
              url: "/yeonjin.jpeg",
              width: 600,
              height: 300,
              alt: "멋지다 연진아~",
              type: "image/jpeg",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/yeonjin.jpeg",
          },
        ]}
      />

      <Component {...pageProps} />
    </>
  );
}
