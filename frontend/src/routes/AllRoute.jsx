import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteConstant } from "../constants/RouteConstant";
import Home from "../components/Home/Home";
import Stations from "../components/Stations/Stations";
import Journeys from "../components/Journeys/Journeys";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path={RouteConstant.Home} element={<Home />} />
        <Route path={RouteConstant.Stations} element={<Stations />} />
        <Route path={RouteConstant.Journeys} element={<Journeys />} />
      </Routes>
    </>
  );
};

export default AllRoute;
