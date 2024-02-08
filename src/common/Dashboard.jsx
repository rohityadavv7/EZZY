import React from "react";
import Sidebar from "./Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return(
        <div className="flex relative">
            
            <Sidebar/>

            <div className="h-[calc(100vh-3.6rem)] overflow-hidden">
                <div className="bg bg-richblack-100 text-white mx-auto w-11/12 py-18 max-w-[1000px]">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;