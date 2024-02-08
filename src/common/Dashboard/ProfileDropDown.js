import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { logout } from "../../services/operations/authApi";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = () => {
    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className=" relative">
            <button className="flex items-center gap-1 group">
                <img src={user?.image} alt="User" height={44} width={44}
                className="bg aspect-square rounded-full"/>
                <IoIosArrowDown />

                <div className="h-[80px] invisible w-[100px] bg-pure-greys-500 group-hover:visible absolute
                transition-all duration-200 top-10 rounded-md">
                    <div className="h-[20px] w-[20px] invisible absolute bg-pure-greys-500 rotate-45
                     group-hover:visible transition-all duration-200 left-12 -top-2"></div>

                     <button className="bg text-yellow-50 p-4" onClick={()=>{dispatch(logout(navigate))}}>
                        Logout
                     </button>
                     
                </div>
            </button>
        </div>
    )
}

export default ProfileDropDown;