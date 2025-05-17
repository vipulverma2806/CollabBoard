import React from "react";
import { Outlet } from "react-router-dom";
const PrivateRoute = ({ allowedRoles }) => {
  return (
    <div>
      <h1>vipul verma</h1>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
