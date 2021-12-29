import { NextPage } from "next";
import { AppProps } from "next/app";
import { PropsWithChildren, ReactElement, ReactNode } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "../app/store";

import "../styles/index.scss";
import "../node_modules/tailwindcss/tailwind.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  PageProps: PropsWithChildren<ReactElement>;
};

const App = ({ Component, PageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        {getLayout(<Component {...PageProps} />)}
      </Provider>
    </PersistGate>
  );
};

export default App;
