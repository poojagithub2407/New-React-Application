// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAds from "./CreateADS/CreateAds";
import Dashboard from "./Dashboard/Dashboard";
import MediaForm from "./CreateAdForm/MediaForm";
import TextForm from "./CreateAdForm/TextForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/createAds" element={<CreateAds />} />
      <Route path="/mediaADPage" element={<MediaForm />} />
      <Route path="/textAdsPage" element={<TextForm />} />
    </Routes>
  );
};

export default AppRoutes;
