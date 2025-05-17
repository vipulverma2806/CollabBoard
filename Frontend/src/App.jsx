import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./pages/routes/PrivateRoute";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CreateTask from "./pages/admin/CreateTask";
import ManageUsers from "./pages/admin/ManageUsers";
import UserDashboard from "./pages/user/UserDashboard";
import ManageTask from "./pages/admin/ManageTask";
import MyTask from "./pages/user/MyTask";
import ViewTaskDetails from "./pages/user/ViewTaskDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/manage-task" element={<ManageTask />} />
            <Route path="/admin/manage-users" element={<ManageUsers />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/my-task" element={<MyTask />} />
            <Route path="/user/user-dashboard" element={<UserDashboard />} />
            <Route path="/user/user-task-details/:id" element={<ViewTaskDetails/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
