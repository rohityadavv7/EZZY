import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { createTodo, getTodos,  } from "../../services/operations/authApi";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import { todoEndpoints } from "../../services/apis";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const CreateTodo = () => {

    const {
        GET_TODO
    } = todoEndpoints;

    const dispatch = useDispatch();
    const[todo, setTodo] = useState([]);

    const{register, handleSubmit} = useForm();

    const[modal, setModal] = useState(false);

    const {user} = useSelector((state) => state.profile)
    const {token} = useSelector((state) => state.auth);

    const createTodoNow =  (data, e)=>{
        e.preventDefault();
        const todoDate = {
            ...data
        }
        console.log("Printing todo data...", todoDate);

        // console.log(token);
        // const usertoken = token;
        // const token = user?.token;
        // console.log("TOKEN...", token);
        const email = user?.email;
        console.log("EMAIL..", email);

        const{title, description} = todoDate;

        dispatch(createTodo(title, description, email));

    }

    const getTodos = async() => {
        const response = await apiConnector("GET", GET_TODO);
        console.log("PRINTING TODOS...", response?.data?.userDetails[0].todoCreated);
        setTodo(response?.data?.userDetails[0].todoCreated);
    }


    useEffect(() => {
        // const email = user?.email;
        // console.log(email);
        getTodos();
    },todo);
    return(

        <div className="min-w-[1000px] absolute ml-[9rem] mt-10 space-y-4">
            <div className="bg-[#2F2E57] flex flex-col space-y-6 pl-6 pt-4 rounded-md relative">
                <h1 className="font-abc text-2xl">
                    Hey, {user?.firstName}!
                </h1>

                <div className="flex justify-between items-center w-[60%] bg-[#28274E] rounded-lg p-2 
                mt-4 font-title font-semibold">
                    <p className="text-xl">Add Item</p>
                    <button onClick={() => setModal(prev => !prev)}>
                        <IoMdAddCircle  className="text-2xl"/>
                    </button>

                </div>

                <h1 className="text-2xl font-title font-semibold">
                    To Do's
                </h1>
                <div className="h-1 flex bg-[#28274E] w-[80%] "></div>

                <div>
                    {
                        todo.length > 0 ? 
                        (<div className="bg-[#28274E] p-4
                         rounded-md w-[60%] ">
                            {
                                todo.map((eachTodo,index) => {
                                    return(
                                        <div key={index}>

                                            <div className="flex gap-4 items-center font-title font-semibold
                                            text-2xl text-yellow-100 ">
                                                <FaCircleArrowRight  className="text-white"/>
                                                {eachTodo.description}
                                                
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>)
                        :
                        (<div className="bg-[#414166] w-[80%] flex  p-4 rounded-md m-4 ">
                            <p className="text-xl font-title font-semibold">No Todos Yet!</p>

                        </div>)
                    }
                </div>

                {
                    modal? 
                    (<div className="absolute h-screen -top-16 -left-[150px] flex justify-center
                     items-center w-screen bg-[#414166] opacity-100">
                       <div className="h-[500px] w-[600px] opacity-100">
                            <form onSubmit={handleSubmit(createTodoNow)} className="flex flex-col space-y-6">
                                <label>
                                    <p className="bg text-2xl font-title font-semibold mb-2">Todo Title</p>
                                    <input type="text" name="title" 
                                    {...register("title")}
                                    className="text-richblack-10 p-2 rounded-md bg-[#] w-[60%]"/>
                                </label>

                                <label>
                                    <p className="text-2xl font-title font-semibold mb-2">Todo description</p>
                                    <input type="text" name="description" 
                                    {...register("description")}
                                    className="text-richblack-10 p-2 rounded-md w-[60%]"/>
                                </label>
                                

                                <div className="flex justify-between mt-8">
                                    <button onClick={() => setModal((prev) => !prev)}
                                    className="px-[14px] py-[8px] bg-yellow-50 text-richblack-20
                                     rounded-md font-semibold flex items-center gap-2">
                                        <FaRegArrowAltCircleLeft />
                                        Go Back
                                    </button>
                                    <button className="px-[14px] py-[8px] rounded-md bg-yellow-50
                                     text-richblack-20 font-semibold ">
                                        Create Todo
                                    </button>
                                </div>
                            </form>
                       </div>
                    </div>)
                    :
                    (<div></div>)
                }
            </div>
        </div>
    )
}

export default CreateTodo;