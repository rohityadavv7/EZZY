import React from "react";
import bg1 from "../../assets/bg-1.png"
import bg3 from "../../assets/bg3.png"
import { FcGoogle } from "react-icons/fc";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/signup")
    }

    return(
        <div className="relative flex flex-col  w-full mx-auto">

            {/* SECTION-1 */}
            <div className=" bg-white flex flex-col justify-start items-center">
                
                <h1 className="text-[150px] font-bold mt-10">
                    TO DO
                </h1>
                
                <p className="text-title text-richblack-1 mb-10 text-[50px]">
                    Reminds Everything
                </p>

                <img src={bg1} alt="image" height={160} width={160} 
                className="absolute right-0 rotate-45 top-10"/>
            </div>

            {/* SECTION-2 */}
            
            <div className=" reltive h-full flex flex-col justify-start items-center space-y-4">
                <button className="bg-richblack-20 flex items-center gap-2 justify-center
                 px-[14px] py-[10px] mt-16 text-white w-[40%] mx-auto rounded-md"
                 onClick={handleClick}>
                    Sign up with Google plus
                    <FcGoogle className="text-2xl "/>
                </button>

                <button className="bg-richblack-20 px-[14px] flex items-center justify-center gap-2
                 py-[10px]  text-white w-[40%] mx-auto rounded-md mb-10"
                 onClick={() => {navigate("/login")}}>
                    Log In
                    <FaSignInAlt className="text-2xl"/>
                </button>

                <img src={bg3} alt="image2"  height={150} width={150} 
                className="absolute left-0 bottom-0 -rotate-45"/>
            </div>

        </div>
    )
}

export default Home;