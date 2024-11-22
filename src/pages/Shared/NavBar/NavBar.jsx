import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../../hooks/useCart";
import { AuthContext } from "./../../../contexts/AuthContext";

const Navbar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  const [carts] = useCart();
  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged Out Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    if (loading) {
      return;
    }
  };
  const subMenu = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"order/offered"}>Order</Link>
      </li>
      <li>
        <Link to={"order/offered"}>
          <FaShoppingCart />
          <div className="badge badge-secondary">+{carts?.length ?? 0}</div>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut} className="">
              Logout
            </Link>
          </li>
          {user && user?.photoURL && (
            <img
              src={user.photoURL}
              className="w-5 h-5 rounded-full mt-2"
              alt={user.email}
            />
          )}
        </>
      ) : (
        <li>
          <Link to={"login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-20 max-w-screen-xl bg-black opacity-60 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {subMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FoodBD</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{subMenu}</ul>
        </div>
        <div className="navbar-end">
          {user?.displayName && <p>{user.displayName}</p>}
          <a className="btn ml-2">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
