import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Navbar from "@/components/nav";
import "../generals.css";
import { Paper } from "@mui/material";
import { PageContainer } from "@toolpad/core";
import { AppContextProvider } from "@/contexts/general";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AppContextProvider>
      <Navbar />
      <PageContainer>
        <Paper
          elevation={3}
          variant="outlined"
          sx={{
            padding: "10px",
          }}
        >
          <Component {...pageProps} />
        </Paper>
      </PageContainer>
    </AppContextProvider>
  );
}
