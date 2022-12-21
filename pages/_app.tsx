import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
