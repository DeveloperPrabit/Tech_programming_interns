import React from "react";

//user Route
import Login from "./pages/Login";
import Register from "./pages/Register";

import ErrorPage from "./pages/ErrorPage";
import AdminSidebar from "./layouts/adminLayouts/AdminSidebar";
import Profile from "./pages/Profile";
import Header from "./layouts/Header";
import Home from "./pages/users/Home";

import Politics from "./pages/admin/articlesSection/Politics";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail";

import UserLayout from "./layouts/UserLayout";

const App = () => {
  return (
    <>
      {/* <div className="flex justify-items-center text-30 bg-purple-500  animate-marquee"> */}
      <div className="flex justify-items-center text-30 bg-purple-500 fixed top-0 left-0 w-full h-7">
        Welcome News Portal App :
      </div>

      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Routes>
        {/* General Route  */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/verify-email" element={<VerifyEmail />}></Route>

        {/* user routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
