import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className="bg-[#f8f9fa] dark:bg-[#212529] min-h-screen">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
