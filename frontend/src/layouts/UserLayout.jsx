import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "78vh", margin: "2px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
