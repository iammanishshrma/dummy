import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const adminBaseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;

//Instance for using base url
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token =
            typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null;
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    function (response) {
        if (response.status === 401) {
            typeof window !== "undefined"
                ? localStorage.removeItem("token")
                : null;
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Instance for using admin base url
const adminAxiosInstance = axios.create({
    baseURL: adminBaseUrl,
});

export { axiosInstance, adminAxiosInstance };
