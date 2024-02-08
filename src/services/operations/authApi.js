import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { endPoints,todoEndpoints } from "../apis"
import {toast} from "react-hot-toast";



const {
    LOG_IN, SIGN_UP
} = endPoints;

const{
    GET_TODO, CREATE_TODO
} = todoEndpoints

export function login(email,password,navigate){
    
    return async(dispatch) =>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST",LOG_IN,{
                email,password
            })

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            dispatch(setToken(response.data.token));

            const userImage = response?.data?.checkUser?.image ?
                                 response?.data?.checkUser?.image : `https://api.dicebear.com/7.x/thumbs/svg`

            dispatch(setUser({...response.data.checkUser, image:userImage }))

            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.checkUser));

            toast.success("Login Successfull!")
            navigate("/dashboard/my-profile");

        }catch(error){
            console.log("cannot log in");
            toast.error("Could not Log in")
            console.log(error);
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}


export function signup(firstName, lastName, email,password,confirmPassword, navigate){

    return async(dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", SIGN_UP,{
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            })

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("Signed up successfully!")
            navigate("/login");

        }catch(error){
            console.log("cannot sign up");
            toast.error("sign up failed");
            console.log("PRINTING AXIOS ERROR....",error);
        }

        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function createTodo(title, description, email){
    return async(dispatch) => {
        const toastid = toast.loading("Loading...");
        try{
            const response = await apiConnector("POST", CREATE_TODO, {
                title, description, email
            })

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("todo created successfully!");
        }
        catch(error){
            console.log("PRINTING AXIOS ERROR...", error);
            toast.error("Could not create Todo");
        }

        toast.dismiss(toastid);
    }
}

export function getTodos(){
    return async(dispatch) => {
        const toastId = toast.loading("Loading..")
        try{
            const response = await apiConnector("GET", GET_TODO)
            
            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("Todos fetched successfully!");
        }
        catch(error){
            console.log("cannot fetch todos");
            toast.error("Could not Fetch Todos");
            console.log("PRINTING AXIOS ERROR...", error);
        }
        toast.dismiss(toastId);
        
    }
}

export function logout(navigate){

    return(dispatch)=> {
        
        dispatch(setToken(null));
        dispatch(setUser(null));

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("logged Out!");
        navigate("/");
    }
    
}