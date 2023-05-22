import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/bracketcs_logo.svg" />
      </Head>
      <div className="flex h-screen flex-col">
        <Component {...pageProps} />
        <footer className="flex flex-none justify-center bg-black text-white">
          Copyright &copy; 2023 by BracketCS.
        </footer>
      </div>
    </>
  );
}
