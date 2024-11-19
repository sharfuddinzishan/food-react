import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const isLoginPath =
    location.pathname.includes("login") ||
    location.pathname.includes("registration");
  return (
    <>
      {isLoginPath || <Navbar />}
      <Outlet />
      {isLoginPath || <Footer />}
    </>
  );
};

export default Main;
