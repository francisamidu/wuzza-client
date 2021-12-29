import React from "react";
import Head from "next/head";
import {
  Features,
  Footer,
  Header,
  Intro,
  MoreInfo,
  Partners,
  Pricing,
  Try,
} from "../components";

const Index = () => {
  return (
    <main className="overflow-hidden">
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
      <Partners />
      <Intro />
      <Features />
      <MoreInfo />
      <Pricing />
      <Try />
      <Footer />
    </main>
  );
};
export default Index;
