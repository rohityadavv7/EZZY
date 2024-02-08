import React from "react";
import logo from "../assets/logo.png"
import { Link, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import ProfileDropDown from "./Dashboard/ProfileDropDown";

const Navbar = () => {

    const {token} = useSelector((state) => state.auth);

    const location = useLocation();

    const matchRoutes =(route) => {
        return matchPath({path:route}, location.pathname);
    }

    return(
        <div className="bg-white flex p-4 justify-evenly border-b-2 border-b-richblue-200 ">

            <div className="flex">
                <img src={logo} alt="logo" height={32} width={32}/>
                <p className="text-richblack-5 font-abc text-3xl">EZZY</p>
            </div>

            <div>
                <ul className="flex text-richblack-5 gap-4 text-xl font-bold font-title">
                    <li>
                        <Link to="/" className={`${matchRoutes("/")?"text text-richblue-1":"text-richblack-5"} `}>
                            Home
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="/about" className={`${matchRoutes("/about")?"text text-richblue-1":"text-richblack-5"}`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`${matchRoutes("/contact")?"text text-richblue-1":"text-richblack-5"}`}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                {
                    token === null && (
                        <button className="px-[14px] py-[10px] bg-[#0085A3] text-white flex items-center gap-2
                        font-title font-semibold rounded-lg">
                            Get Started!
                            <FaArrowAltCircleRight  className="text-2xl"/>
                        </button>
                    )
                }

                {
                    token !== null &&(
                        <ProfileDropDown/>
                    )
                }
            </div>


        </div>
    )
}

export default Navbar;