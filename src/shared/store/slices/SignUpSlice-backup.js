import { createSlice } from '@reduxjs/toolkit';

import { axiosInstance } from '@/shared/api/axios';
import { userEndpoints } from '@/shared/api/endpoints';

export const SignUpSlice = createSlice({
    name: 'SignUpData',
    initialState: {
        loading: false,
        sucessStatus: false,
    },
    reducers: {
        SignUpData: (state, action) => {
            if (action.payload.type === 'loading') {
                state.loading = true;
            } else if (action.payload.type === 'loaded') {
                state.loading = false;
            }
            state.SignUpData = action.payload;
        },
        getOtp: (state, action) => {
            if (action.payload.type === 'loading') {
                state.loading = true;
            } else if (action.payload.type === 'loaded') {
                state.loading = false;
            }
            state.getOtp = action.payload.payload;
            state.sucessStatus = action.payload.sucessStatus;
            localStorage.setItem('token', action.payload.token);
        },
    },
});

export const getOtpNew = (data, notify) => async (dispatch) => {
    dispatch(SignUpData({ type: 'loading' }));
    try {
        localStorage.removeItem('token');
        const response = await axiosInstance.post(userEndpoints.getOtp, data);
        dispatch(getOtp({ type: 'loaded', sucessStatus: true, payload: response.data.data }));
        if (response.data.status === 'success') {
            notify(response.data.message);
        }
    } catch (err) {
        dispatch(getOtp({ type: 'loaded', sucessStatus: false }));
        notify(err.response.data.message);
    }
};
export const reSendOtp = (data, notify) => async (dispatch) => {
    dispatch(SignUpData({ type: 'loading' }));
    try {
        localStorage.removeItem('token');
        const response = await axiosInstance.post(userEndpoints.resendOtp, data);
        dispatch(getOtp({ type: 'loaded', sucessStatus: true, payload: response.data.data }));
        if (response.data.status === 'success') {
            notify(response.data.message);
        }
    } catch (err) {
        dispatch(getOtp({ type: 'loaded', sucessStatus: false }));
        notify(err.response.data.message);
    }
};
export const getTodoAsync = (data, notify, navigate) => async (dispatch) => {
    dispatch(SignUpData({ type: 'loading' }));
    try {
        const response = await axiosInstance.post(userEndpoints.SignUp, data);
        dispatch(SignUpData({ type: 'loaded', payload: response.data }));
        localStorage.removeItem('token');
        if (response.data.status === 'success') {
            notify(response.data.message);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    } catch (err) {
        dispatch(SignUpData({ type: 'loaded' }));
        notify('err.response.data.message');
        localStorage.removeItem('token');
    }
};
export const { SignUpData, getOtp } = SignUpSlice.actions;
export default SignUpSlice.reducer;
