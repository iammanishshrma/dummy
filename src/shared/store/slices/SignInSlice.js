import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { axiosInstance } from "@/shared/api/axios";
import { userEndpoints } from "@/shared/api/endpoints";

export const SignInSlice = createSlice({
    name: "SignInData",
    initialState: {
        loading: false,
        sucessStatus: null,
    },
    reducers: {
        SignInData: (state, action) => {
            if (action.payload.type === "loading") {
                state.loading = true;
            } else if (action.payload.type === "loaded") {
                state.loading = false;
            }
            state.SignInData = action.payload;
            state.sucessStatus = action.payload.payload?.status;
        },
    },
});

export const GetLogin = (data, notify, router) => async (dispatch) => {
    dispatch(SignInData({ type: "loading" }));
    try {
        const response = await axiosInstance.post(
            userEndpoints.VerifyOtp,
            data
        );
        dispatch(SignInData({ type: "loaded", payload: response.data }));
        notify(response.data.message);
        console.log(response.data.data);
        localStorage.setItem("token", response.data.data.token);
        Cookies.set("token", response.data.data.token, { expires: 1 });
        setTimeout(() => {
            router.push("/");
        }, 800);
    } catch (err) {
        dispatch(SignInData({ type: "loaded" }));
        notify(err.response.data.message);
    }
};

export const LoginEMail = (data, notify, router) => async (dispatch) => {
    dispatch(SignInData({ type: "loading" }));
    try {
        const response = await axiosInstance.post(userEndpoints.SignIn, data);
        dispatch(SignInData({ type: "loaded", payload: response.data }));
        notify(response.data.message);
        localStorage.setItem("token", response.data.data.token);
        Cookies.set("token", response.data.data.token, { expires: 1 });
        setTimeout(() => {
            router.push("/");
        }, 800);
    } catch (err) {
        dispatch(SignInData({ type: "loaded" }));
        notify(err.response.data.message);
    }
};

export const LoginNumber = (data, notify) => async (dispatch) => {
    dispatch(SignInData({ type: "loading" }));
    try {
        const response = await axiosInstance.post(userEndpoints.LoginMob, data);
        dispatch(
            SignInData({
                type: "loaded",
                payload: response.data,
            })
        );
        console.log(response);
        notify(response.data.message);
    } catch (err) {
        dispatch(SignInData({ type: "loaded" }));
        notify(err.response.data.message);
    }
};

export const { SignInData } = SignInSlice.actions;
export default SignInSlice.reducer;
