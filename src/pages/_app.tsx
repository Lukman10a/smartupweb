import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DmSans } from "@/lib/utils";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${DmSans.className} ${DmSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
