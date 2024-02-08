import React from "react";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneProfile } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Sidebar = () => {
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }
    return(
        <div className=" bg-richblack-20 text-white flex relative min-w-[222px] flex-col
           py-10 h-[calc(100vh-3.5rem)]">
            <div className="mt-10 space-y-4 flex flex-col text-2xl font-title font-semibold justify-center items-center mr-6">
                <NavLink to="/dashboard/my-profile">
                    <div className={`${matchRoute("/dashboard/my-profile")? "text-yellow-50":"text-richblack-1"} flex gap-2 justify-between items-center`}>
                        <p>My Profile</p>
                        <CgProfile />
                    </div>
                </NavLink>

                <NavLink to="/dashboard/allTodos">
                    <div className={`${matchRoute("/dashboard/allTodos")? "text-yellow-50":"text-richblack-1"} flex gap-2 justify-between items-center`}>
                        <p>All Todo's</p>
                        <AiTwotoneProfile />
                    </div>
                </NavLink>

                <NavLink to="/dashboard/settings">
                    <div className={`${matchRoute("/dashboard/settings")? "text-yellow-50":"text-richblack-1"} flex gap-2 justify-between items-center`}>
                        <p>Settings</p>
                        <FcSettings />
                    </div>
                </NavLink>

                
            </div>
            <div className="h-1 w-[80%] mt-8 flex mx-auto bg-richblack-10"></div>

            <div className="mt-10 space-y-4 flex flex-col text-2xl font-title font-semibold justify-center items-center mr-6">
                <NavLink to="/dashboard/createTodo">
                    <div className={`${matchRoute("/dashboard/createTodo")? "text-yellow-50":"text-richblack-1"} flex gap-2 justify-between items-center`}>
                        <p>Create Todo</p>
                        <MdOutlineCreateNewFolder />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;