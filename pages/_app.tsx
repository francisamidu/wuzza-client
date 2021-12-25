import { NextPage } from "next";
import { AppProps } from "next/app";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
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
  return <>{getLayout(<Component {...PageProps} />)}</>;
};

export default App;
