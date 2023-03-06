import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const checkLoginSlice = createSlice({
    name: "checkLogin",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        userLogin: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            Cookies.set("token", action.payload.token, { expires: 1 });
            state.isLoggedIn = true;
        },
        checkloginState: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { checkloginState, userLogin } = checkLoginSlice.actions;

export default checkLoginSlice.reducer;
