import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setSignupData : null,
    loading:null,
    token : localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")) : null

}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignupData(state, value){
            state.setSignupData = value.payload;
        },
        setToken(state, value){
            state.token = value.payload
        }, 
        setLoading(state, value){
            state.loading = value.payload
        }
    }
});

export const { setToken, setSignupData, setLoading} = authSlice.actions;
export default authSlice.reducer