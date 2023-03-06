import React, { useEffect, useRef } from "react";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

import { userLogin } from "@/shared/store/slices/checkLoginSlice";
import signInWithSocialMedia from "@/shared/utils/socialSignIn";
import "./SocialLogin.scss";

const SocialLogin = () => {
    const googleLoginButtonRef = useRef();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleCallbackResponse = (response) => {
        const googleJwt = response.credential;
        const queryObject = {};

        const userObject = jwtDecode(googleJwt);
        queryObject["name"] = userObject.name;
        queryObject["email"] = userObject.email;
        queryObject["socialId"] = userObject.sub;
        queryObject["modeOfSignUp"] = "google";

        signInWithSocialMedia(queryObject, router, (token) => {
            dispatch(userLogin({ token }));
        });
    };

    // Google Login
    useEffect(() => {
        // Global google
        google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(googleLoginButtonRef.current, {
            theme: "outline",
            type: "icon",
            size: "large",
            width: "46px",
        });
    }, []);

    //Facebook Login
    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                // appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
                appId: "758578365717574",
                cookie: true,
                xfbml: true,
                version: "v16.0",
            });

            FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            let js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);

    // function checkLoginState() {
    //     FB.getLoginStatus(function (response) {
    //         statusChangeCallback(response);
    //     });
    // }

    function getUserData() {
        FB.api("/me", { fields: "name,email, picture" }, (response) => {
            console.log(response);
            const payload = {
                email: response.email,
                socialId: response.id,
                name: response.name,
                modeOfSignUp: "facebook",
            };
            signInWithSocialMedia(payload, router, (token) => {
                dispatch(userLogin({ token }));
            });
        });
    }

    const fbLoginHandler = () => {
        //do the login
        FB.login(
            (response) => {
                if (response.authResponse) {
                    //user just authorized your app
                    // document.getElementById("loginBtn").style.display = "none";
                    getUserData();
                }
                console.log("facebookResponse", response);
            },
            { scope: "email,public_profile", return_scopes: true }
        );
    };

    return (
        <>
            <div className="media-login-wrapper">
                <h3>Continue with social accounts.</h3>
                <div className="social-login">
                    <div
                        className="google-login-btn"
                        ref={googleLoginButtonRef}
                    />
                    <button className="facebook" onClick={fbLoginHandler}>
                        <i className="icon-fb"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;
