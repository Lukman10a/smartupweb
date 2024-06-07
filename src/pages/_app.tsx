import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DmSans } from "@/lib/utils";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <main className={`${DmSans.className} ${DmSans.variable}`}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}
