import React, { useContext } from "react";
import { Outlet, Route } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Sidebar from "../components/Sidebar";
import MainPart from "../components/MainPart";
import BottomPart from "../components/BottomPart";

function Layout() {
  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-col">
      <div class="upperPart w-full h-[100vh] overflow-hidden flex">
        <Sidebar />
        <MainPart>
          <Route>
            <Outlet />
          </Route>
        </MainPart>
      </div>
      <div>
        <BottomPart />
      </div>
    </div>
  );
}

export default Layout;
