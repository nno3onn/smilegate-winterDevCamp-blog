import "../styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../store/configuresTore";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
