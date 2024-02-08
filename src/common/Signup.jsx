import {useForm} from "react-hook-form";
import logo from "../assets/logo.png"
import { useState } from "react";
import { setSignupData } from "../slices/authSlice";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/operations/authApi";


const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const{register, handleSubmit} = useForm();

    const[showPassword, setShowPassword] = useState(false);

    const signupnow = (data, e)=> {
        e.preventDefault();

        const signupData={
            ...data
        }

        console.log("PRINTING SIGN UP DATA...",signupData);
        const {firstName, lastName, email, password, confirmPassword} = signupData;
        dispatch(setSignupData(signupData));
        dispatch(signup(firstName,lastName,email,password,confirmPassword, navigate));
    }

    return(
        <div className="flex flex-col justify-center items-center max-w-[350px] mx-auto mt-12">
            <h1 className="text-2xl text-white flex gap-1 items-center">
                <img src={logo} alt="logo"  className="text-3xl"/>
                <p className="font-abc text-3xl">EZZY</p>
            </h1>

            <form onSubmit={handleSubmit(signupnow)} className="w-full mt-2 relative space-y-2">
                <label>
                    <p className="text-xl text-white">First Name:</p>
                    <input type="text"
                            name="firstName"
                            {...register("firstName")}
                            placeholder="Enter your first name..."  
                            className="w-full p-2 rounded-md bg-[#212838] text-white font-title font-semibold mt-2"  
                    />
                </label>

                <label>
                    <p className="text-xl text-white">Last Name:</p>
                    <input type="text"
                            name="lasstName"
                            {...register("lastName")}
                            placeholder="Enter your last name..." 
                            className="w-full p-2 rounded-md bg-[#212838] text-white font-title font-semibold mt-2"     
                    />
                </label>

                <label>
                    <p className="text-xl text-white">Email:</p>
                    <input type="email"
                            name="email"
                            {...register("email")}
                            placeholder="Enter your email..." 
                            className="w-full p-2 rounded-md bg-[#212838] text-white font-title font-semibold mt-2"     
                    />
                </label>

                <label>
                    <p className="text-xl text-white">Password</p>
                    <input type = {showPassword?"text":"password"}
                            name="password"
                            {...register("password")}
                            placeholder="Enter your Password..."  
                            className="w-full p-2 rounded-md bg-[#212838] text-white font-title font-semibold mt-2"    
                    />
                    <span onClick={() => setShowPassword((prev)=> !prev)} className="absolute top-[17rem] left-[20rem]">
                        {
                            showPassword?<LiaEyeSolid fontSize={24} className="text-white"/>:
                            <LiaEyeSlashSolid fontSize={24} className="text-white"/>
                        }
                    </span>
                </label>

                <label>
                    <p className="text-xl text-white">Confirm Password</p>
                    <input type = {showPassword?"text":"password"}
                            name="confirmPassword"
                            {...register("confirmPassword")}
                            placeholder="Confirm your Password..." 
                            className="w-full p-2 rounded-md bg-[#212838] text-white font-title font-semibold mt-2"     
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-[21.7rem] left-[20rem]">
                        {
                            showPassword?<LiaEyeSolid fontSize={24} className=" text-white"/>:
                            <LiaEyeSlashSolid fontSize={24} className=" text-white"/>
                        }
                    </span>
                </label>

                <button type="submit" className="px-[14px] py-[10px] mt-2 bg-[#56B1CB] w-full mx-auto
                 text-white rounded-md text-xl font-semibold">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup