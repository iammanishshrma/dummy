import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { LoginEMail } from "@/shared/store/slices/SignInSlice";
import LoaderUi from "@/shared/components/LoaderUi/LoaderUi";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignWithEmail = (props) => {
    const router = useRouter();
    const openEmail = () => {
        props.clickShow(false);
    };
    const loader = useSelector((state) => state.SignInSlice.loading);
    const getIp = useSelector((state) => state.systemIpSlice?.systemIp);
    const notify = (e) => {
        toast(e);
    };
    const dispatch = useDispatch();
    const [data, setData] = useState("");
    const [pwdShow, getPwd] = useState(false);
    const showPwd = () => {
        getPwd(!pwdShow);
    };
    let schema = yup.object().shape({
        email: yup
            .string("Enter your User name/Phone number")
            .required("User name/Phone Number is required")
            .test(
                "test-name",
                "Enter valid User name/Phone Nubmer",
                function (value) {
                    const UserRegex =
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    let isValidEmail = UserRegex.test(value);
                    if (!isValidEmail) {
                        return false;
                    }
                    return true;
                }
            ),
        password: yup
            .string("Enter your Password / Otp")
            .required("Enter your Password / Otp"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
    const onSubmitData = (data) => {
        setData(JSON.stringify(data));
        //data.language_id = languageList;
        data.ip_address = getIp;
        dispatch(LoginEMail(data, notify, router));
    };
    return (
        <section className="login">
            {loader && <LoaderUi />}
            <ToastContainer />
            <div className="container">
                <div className="login-content">
                    <div className="login-box">
                        <h2>Login with email</h2>
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmitData)}>
                                <div className="form-group">
                                    <i className="icon-email"></i>
                                    <input
                                        {...register("email")}
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                    <span className="error-msg">
                                        {errors.email?.message}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <i className="icon-password"></i>
                                    <input
                                        {...register("password")}
                                        type={pwdShow ? "text" : "password"}
                                        placeholder="Password "
                                        className="form-control"
                                    />
                                    <span className="error-msg">
                                        {errors.password?.message}
                                    </span>
                                    <i
                                        className={`icon-eye ${
                                            pwdShow ? "active" : ""
                                        }`}
                                        onClick={showPwd}
                                    ></i>
                                </div>
                                <div className="btn-wrap">
                                    <input
                                        type="submit"
                                        className="login-btn"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="forge-pwd">
                            Login with Mobile?{" "}
                            <button className="click-here" onClick={openEmail}>
                                Click here
                            </button>
                        </div>
                        <div className="forge-pwd">
                            <Link
                                href="/forget-password"
                                className="click-here"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignWithEmail;
