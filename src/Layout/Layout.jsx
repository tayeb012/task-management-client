import React from "react";
import NavBar from "../SharedComponent/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footers from "../SharedComponent/Footers";

const Layout = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="lg:px-28 md:px-16 sm:px-12 px-6 sm:py-10 py-6">
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footers></Footers>}
    </div>
  );
};

export default Layout;
