import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next"
import { store } from "@/store";
import Navbar from "@/components/Navbar";

function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(App);