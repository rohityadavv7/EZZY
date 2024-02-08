import React from "react";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {

    const {user} = useSelector((state)=> state.profile);
    console.log("USER DETAILS...", user);

    return(
        <div className="min-w-[1000px] absolute ml-[9rem] mt-10 space-y-4">
            <h1 className="text-2xl font-title font-bold">
                My Profile
            </h1>

            <div className="flex justify-between items-center bg-richblack-100 rounded-md p-7">
                <div className="flex gap-1 items-center">
                    <img src={user?.image} height={68} width={68} 
                    className="bg aspect-square rounded-full"/>
                    <div>
                        <p>{user?.firstName + " " + user?.lastName}</p>
                        <p>{user?.email}</p>
                    </div>

                </div>

               <div className="flex items-center">
                    <button className="flex gap-2 bg-yellow-100 items-center px-4 py-1 rounded-md">
                        <p className="text-black font-medium">Edit</p>
                        <FaEdit  className="text-black"/>
                    </button>
               </div>
            </div>
        </div>
    )
}

export default MyProfile;