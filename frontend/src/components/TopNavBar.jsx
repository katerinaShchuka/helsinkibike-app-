import React from "react";
import { Navbar, Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import MapIcon from "@rsuite/icons/legacy/MapMarker";
import LocIcon from "@rsuite/icons/legacy/LocationArrow";
import { RouteConstant } from "../constants/RouteConstant";
import { Link } from "react-router-dom";

const TopNavBar = () => (
  <Navbar>
    <Link to={RouteConstant.Home}>
      <Navbar.Brand as="div">Helsinki Bike</Navbar.Brand>
    </Link>
    <Nav>
      <Link to={RouteConstant.Home}>
        <Nav.Item as="div" icon={<HomeIcon />}>
          Home
        </Nav.Item>
      </Link>
      <Link to={RouteConstant.Stations}>
        <Nav.Item as="div" icon={<LocIcon />}>
          Stations
        </Nav.Item>
      </Link>
      <Link to={RouteConstant.Journeys}>
        <Nav.Item as="div" icon={<MapIcon />}>
          Journeys
        </Nav.Item>
      </Link>
    </Nav>
  </Navbar>
);

export default TopNavBar;
