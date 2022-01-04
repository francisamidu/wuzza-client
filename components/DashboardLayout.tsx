import { NextComponentType } from "next";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { useTheme } from "../contexts";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = (
  props: Partial<PropsWithChildren<NextComponentType>>
) => {
  const { children } = props;
  const { theme } = useTheme();
  return (
    <main>
      <Head>
        <title>Wuzza - Productivity management in one place</title>
        <meta
          name="description"
          content="Wuzza is a productivity management system that allows you to manage and monitor your notes,calendar,schedules,tasks, projects and more"
        ></meta>
        <meta name="author" content="Francis Amidu"></meta>
        <meta name="site-name" content="wuzza.netlify.app"></meta>
      </Head>
      <section className="grid dashboard-container">
        <DashboardSidebar />
        <section className="grid dashboard">
          <DashboardHeader />
          {children}
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
