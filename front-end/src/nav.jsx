import { NavLink } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Nav = () => {
  return (
    <div className="w-full h-14 flex justify-between px-7 md:px-5 items-center bg-black text-white sticky top-0">
      <div className="text-3xl font-bold flex  ">
        <img src="../../images/3.png" alt="main pic" className="w-14 mb-2 " />
        <h1 className="my-2 mt-3 mx-3 text-cyan-400">All Ai Tools</h1>
      </div>

      <ul className="md:flex font-semibold hidden ">
        <li className="mx-[14px] curser-pointer   hover:text-cyan-400">
          <NavLink
            to={"/"}
            className={({ isActive }) => [
              isActive ? "font-extrabold uppercase text-cyan-400" : null,
            ]}
          >
            Home
          </NavLink>
        </li>
        <li className="mx-[14px] curser-pointer   hover:text-cyan-400 ">
          <NavLink
            to={"allcategory"}
            className={({ isActive }) => [
              isActive ? "font-extrabold uppercase text-cyan-400" : null,
            ]}
          >
            All Categories
          </NavLink>
        </li>
        <li className="mx-[14px] curser-pointer   hover:text-cyan-400 ">
          <NavLink
            to={"submitaitools"}
            className={({ isActive }) => [
              isActive ? "font-extrabold uppercase text-cyan-400" : null,
            ]}
          >
            Submit Al Tools
          </NavLink>
        </li>

        <li className="mx-[14px] curser-pointer   hover:text-cyan-400 ">
          <NavLink
            to={"saved"}
            className={({ isActive }) => [
              isActive ? "font-extrabold uppercase text-cyan-400" : null,
            ]}
          >
            Saved
          </NavLink>
          <NavLink
            to={"Allahaakbar"}
          >
          </NavLink>
        </li>
      </ul>
      <div>
        <GoogleOAuthProvider clientId="104017932926-fcvrj17oh4bs3d2roocsp4o5eah5hfue.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);

              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Nav;
