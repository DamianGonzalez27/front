import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Navbar from "@/components/nav";
import "../generals.css";
import { Container } from "@mui/material";
import { PageContainer } from "@toolpad/core";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <div>
      <Navbar />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </div>
  );
}
