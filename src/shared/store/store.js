import { configureStore } from '@reduxjs/toolkit';
import FilterDataSlice from './slices/FilterDataSlice';
import SignInSlice from './slices/SignInSlice';
import SignUpSlice from './slices/SignUpSlice';
import languageListSlice from './slices/languageListSlice';
import ForgetPassSlice from './slices/ForgetPassSlice';
import systemIpSlice from './slices/systemIpSlice';
import checkLoginSlice from './slices/checkLoginSlice';
import getUserSlice from './slices/getUserSlice';
import addressSlice from './slices/addressSlice';

const store = configureStore({
    reducer: {
        FilterDataSlice: FilterDataSlice,
        SignUpSlice: SignUpSlice,
        SignInSlice: SignInSlice,
        languageListSlice,
        ForgetPassSlice,
        systemIpSlice,
        checkLoginSlice,
        getUserSlice,
        addressData: addressSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
