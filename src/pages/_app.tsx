import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next"
import { store } from "@/store";
import Navbar from "@/components/Navbar";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Head>
        <title>Jengal Yazılım Case Study</title>
        <meta name="description" content="Jengal Yazılım Case Study" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(App);