import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "@/shared/api/axios";
import { userEndpoints } from "@/shared/api/endpoints";

export const getOtpNew = createAsyncThunk("getOtp", async (data, thunkAPI) => {
    //localStorage.removeItem("token");
    let response = await axiosInstance
        .post(userEndpoints.getOtp, data)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return thunkAPI.rejectWithValue(error.response.data);
        });
    return response;
});

export const reSendOtp = createAsyncThunk("reSend", async (data, thunkAPI) => {
    //localStorage.removeItem("token");
    let response = await axiosInstance
        .post(userEndpoints.resendOtp, data)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            return thunkAPI.rejectWithValue(error.response.data);
        });
    return response;
});

export const getTodoAsync = createAsyncThunk(
    "submit",
    async (payload, thunkAPI) => {
        //localStorage.removeItem("token");
        const response = await axiosInstance
            .post(userEndpoints.SignUp, payload.data)
            .then((res) => {
                setTimeout(() => {
                    payload.router.push("/sign-in");
                }, 1000);
                return res.data;
            })
            .catch((error) => {
                return thunkAPI.rejectWithValue(error.response.data);
            });
        return response;
    }
);

export const SignUpSlice = createSlice({
    name: "SignUpData",
    initialState: {
        loading: false,
        sucessStatus: false,
        notifyMsg: null,
    },
    reducers: {
        clearState: (state) => {
            state.notifyMsg = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getOtpNew.pending, (state, action) => {
            state.notifyMsg = null;
            state.loading = true;
        });
        builder.addCase(getOtpNew.fulfilled, (state, action) => {
            state.notifyMsg = action.payload.message;
            state.getOtp = action.payload.data;
            //console.log(action.payload.data.token)
            //localStorage.setItem("token", action.payload.data.token);
            state.sucessStatus = true;
            state.loading = false;
        });
        builder.addCase(getOtpNew.rejected, (state, action) => {
            state.notifyMsg = action.payload.message;
            state.loading = false;
            state.sucessStatus = false;
        });
        builder.addCase(reSendOtp.pending, (state, action) => {
            state.notifyMsg = null;
            state.loading = true;
        });
        builder.addCase(reSendOtp.fulfilled, (state, action) => {
            state.notifyMsg = action.payload.message;
            state.reSend = action.payload.data;
            //localStorage.setItem("token", action.payload.data.token);
            state.sucessStatus = true;
            state.loading = false;
        });
        builder.addCase(reSendOtp.rejected, (state, action) => {
            state.notifyMsg = action.payload.message;
            state.loading = false;
            state.sucessStatus = false;
        });
        builder.addCase(getTodoAsync.pending, (state, action) => {
            state.notifyMsg = null;
            state.loading = true;
        });
        builder.addCase(getTodoAsync.fulfilled, (state, action) => {
            state.notifyMsg = action.payload.message;
            state.submit = action.payload.data;
            // localStorage.removeItem("token");
            state.sucessStatus = true;
            state.loading = false;
        });
        builder.addCase(getTodoAsync.rejected, (state, action) => {
            state.notifyMsg = action.payload.message;
            state.loading = false;
            state.sucessStatus = false;
        });
    },
});

export const { clearState } = SignUpSlice.actions;
export default SignUpSlice.reducer;
