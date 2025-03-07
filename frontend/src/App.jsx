import React from "react";

import ErrorPage from "./pages/ErrorPage";
import AdminSidebar from "./layouts/adminLayouts/AdminSidebar";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Home from "./pages/Home";

import Politics from "./Section/Politics";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="flex justify-items-center text-30 bg-purple-500">
        Welcome News Portal App :
      </div>
      {/* <ErrorPage /> */}
      <Header />
      <Home />
      {/* <Politics /> */}
      <Footer />
      {/* <AdminSidebar /> */}
      {/* <Profile /> */}
    </>
  );
};

export default App;
