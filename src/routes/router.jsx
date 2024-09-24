import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ShipingComps from "../pages/ShipingComps";
import AddShiping from "../components/Layouts/AddShiping";
import EditShiping from "../components/Layouts/EditShiping";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shipping-comps" element={<ShipingComps />} />
      <Route path="/add-shiping" element={<AddShiping />} />
      <Route path="/edit-shiping" element={<EditShiping />} />
    </Routes>
  );
};

export default router;
