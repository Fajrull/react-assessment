import React, { useEffect } from "react";
import NavbarDashboard from "../components/Fragments/NavbarDashboard";
import DashboardContent from "../components/Layouts/DashboardContent";

const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <DashboardContent />
    </>
  );
};

export default Dashboard;
