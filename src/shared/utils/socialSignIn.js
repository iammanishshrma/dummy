import { axiosInstance } from "../api/axios";
import { userEndpoints } from "../api/endpoints";

const signInWithSocialMedia = (payload, router, callback) => {
    console.log("payload", payload);
    axiosInstance
        .post(userEndpoints.socialSignin, { socialId: payload.socialId })
        .then((res) => {
            callback(res.data.data.token);
            router.push("/");
        })
        .catch((error) => {
            console.log(error);
            if (error.response.data.message === "USER DOESN'T EXIST") {
                router.push(
                    {
                        pathname: "/social-signup",
                        query: payload,
                    }
                    // "/social-signup"
                );
            }
        });
};

export default signInWithSocialMedia;
