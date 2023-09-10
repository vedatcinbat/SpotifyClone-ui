import React from "react";
import { useUserContext } from "../context/UserContext";
import MainPartNavbar from "./MainPartNavbar";
import MainContent from "./MainContent";
import { Outlet } from "react-router-dom";
function MainPart() {
  return (
    <div className="flex flex-col w-full mr-1">
      <MainPartNavbar />
      <Outlet />
    </div>
  );
}

export default MainPart;
