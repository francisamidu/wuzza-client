import React, { PropsWithChildren } from "react";
import { AppProps } from "next/app";

const HomeLayout = (props: Partial<PropsWithChildren<AppProps>>) => {
  const { children } = props;
  return (
    <section className="flex md:flex-row flex-col justify-between items-center py-4 md:max-w-screen-xl m-auto">
      {children}
    </section>
  );
};

export default HomeLayout;
