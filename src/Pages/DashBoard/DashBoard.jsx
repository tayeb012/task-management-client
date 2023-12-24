import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { linksMain, textColor } from "../../SharedComponent/NavBar";
import useAuth from "../../Hooks/useAuth";
import { Avatar, Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const userPhoto = user?.photoURL;
  const userName = user?.displayName;
  const userLinks = (
    <>
      <li className="flex justify-center items-center border-b-2 border-emerald-900">
        <Avatar img={userPhoto} rounded bordered /> {userName}
      </li>
      <li>
        <NavLink
          to="/dashBoard/taskManagement"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? `${textColor} font-bold ` : ""
          }
        >
          Task Management
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard/addTask"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? `${textColor} font-bold ` : ""
          }
        >
          Add Task
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    navigate("/");
    logOut();
  };

  return (
    <div className="flex flex-col xl:flex-row">
      <Helmet>
        <title>Dash Board - SCC Technovision Inc</title>
      </Helmet>
      <div className="w-full xl:w-3/12">
        <div className="flex xl:h-screen bg-base-200 pr-10">
          <ul className="flex flex-row items-center xl:flex-col menu p-4 text-base-content text-xl font-bold">
            <li>
              <ul className="flex flex-col items-center flex-wrap">
                {userLinks}{" "}
              </ul>
            </li>
            <div className="divider"></div>
            <li>
              <ul className="flex flex-col ">
                <span className="flex xl:flex-col">{linksMain}</span>
                <br />
                <Button onClick={handleSignOut} className="hover:bg-slate-400">
                  Sign Out
                </Button>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-200 w-full xl:w-9/12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
