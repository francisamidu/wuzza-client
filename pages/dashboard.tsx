import { NextComponentType } from "next";
import React from "react";
import { DashboardLayout } from "../components";
import { useAppSelector } from "../hooks";

const Dashboard = () => {
  const auth = useAppSelector((state) => state.auth);
  console.log(auth);
  return (
    <section className="dashboard-content col-start-1 col-end-3 row-start-2 row-end-3 bg-blue-50">
      This is the dashboard layout
    </section>
  );
};

Dashboard.getLayout = (page: NextComponentType) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Dashboard;
