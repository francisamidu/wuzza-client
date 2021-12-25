import Head from "next/head";
import React from "react";
import Header from "../components/Header";

const Index = () => {
  return (
    <main>
      <Head>
        <title>Wuzza - Productivity made easy</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is an app that packs multiple productivity apps in one: (Tasks,Projects,Notes)"
        />
        <meta name="author" content="Francis Amidu" />
      </Head>
      <Header />
    </main>
  );
};
export default Index;
