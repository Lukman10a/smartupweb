import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DmSans } from "@/lib/utils";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // List of paths where you don't want to use the Layout
  const noLayoutPaths = ["/login"];

  const isNoLayoutPath = noLayoutPaths.includes(router.pathname);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {isNoLayoutPath ? (
          <main className={`${DmSans.className} ${DmSans.variable}`}>
            <Component {...pageProps} />
          </main>
        ) : (
          <Layout>
            <main className={`${DmSans.className} ${DmSans.variable}`}>
              <Component {...pageProps} />
            </main>
          </Layout>
        )}
      </QueryClientProvider>
    </Provider>
  );
}
