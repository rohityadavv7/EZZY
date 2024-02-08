const BASE_URL = process.env.REACT_APP_BASE_URL

export const endPoints = {
    LOG_IN : BASE_URL + "/login",
    SIGN_UP : BASE_URL + "/signup" 
}

export const todoEndpoints = {
    CREATE_TODO : BASE_URL+"/createTodo",
    GET_TODO : BASE_URL+"/getTodos"
}