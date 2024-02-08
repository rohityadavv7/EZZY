import React from "react";
import { todoEndpoints } from "../../services/apis";
import { useState, useEffect } from "react";
import { apiConnector } from "../../services/apiConnector";
import { FaCircleArrowRight } from "react-icons/fa6";

const AllTodos = ()=> {
    const {
        GET_TODO
    } = todoEndpoints;

    const[todo, setTodo] = useState([]);

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
            <div className="flex space-y-8 flex-col bg-richblack-100 rounded-md p-7">
                <h1 className="text-3xl font-abc font-semibold">All todos</h1>

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
            </div>
        </div>
    )
}

export default AllTodos;