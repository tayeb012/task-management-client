import React, { useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Avatar, Dropdown } from "flowbite-react";

export const textColor =
  "bg-gradient-to-r from-[#4C53E8] to-[#04B1F3] text-transparent bg-clip-text";

export const linksMain = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? `${textColor} font-bold ` : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="About"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? `${textColor} font-bold ` : ""
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? `${textColor} font-bold ` : ""
        }
      >
        Contact
      </NavLink>
    </li>
  </>
);

const NavBar = () => {
  const [clops, setClops] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const userPhoto = user?.photoURL;
  console.log(user?.photoURL);

  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className="flex justify-between xl:text-4xl md:text-2xl">
      <h2 className="text-2xl md:text-3xl  xl:text-5xl">
        SCC Technovision Inc
      </h2>
      <section className="flex gap-4">
        <div className="md:hidden text-2xl" onClick={() => setClops(!clops)}>
          <MdOutlineClose
            className={` transition-transform duration-1000 font-extrabold ${
              !clops && "hidden"
            }`}
          />
          <FaGripLines
            className={` transition-transform duration-1000 ${
              clops && "hidden"
            }`}
          />
        </div>
        <ul className=" relative p-5 md:hidden text-right flex flex-col lg:gap-10 ">
          <span
            className={`glass z-50 p-2 rounded-lg absolute transform ${
              clops ? "-translate-x-20" : "-translate-x-[40rem]"
            } transition-transform duration-1000`}
          >
            {linksMain}
          </span>
        </ul>
        <ul className="hidden md:flex  lg:gap-4 xl:gap-7 md:gap-1">
          {linksMain}
        </ul>
        {user ? (
          <>
            <Dropdown
              label={<Avatar img={userPhoto} rounded bordered />} // Assuming 'avatar' is a variable with the avatar content
              size="sm"
              type="primary"
              dismissOnClick={true}
              arrowIcon={false}
            >
              <Dropdown.Item
                onClick={handleSignOut}
                className="hover:bg-slate-400"
              >
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          </>
        ) : null}
      </section>
    </div>
  );
};
export default NavBar;
