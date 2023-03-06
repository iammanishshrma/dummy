import React, { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { GetLogin, LoginNumber } from "@/shared/store/slices/SignInSlice";
import LoaderUi from "@/shared/components/LoaderUi/LoaderUi";
import Timer from "@/shared/components/Timer/Timer";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignWithOtp = (props) => {
    const [showResend, setResend] = useState(false);
    const [setMob, getMob] = useState();
    const [getOtpBox, setOtpBox] = useState(true);
    const router = useRouter();
    const openEmail = () => {
        props.clickShow(true);
    };
    const loader = useSelector((state) => state.SignInSlice.loading);
    const getOtpRes = useSelector((state) => state.SignInSlice.sucessStatus);
    const getIp = useSelector((state) => state.systemIpSlice?.systemIp);
    const notify = (e) => {
        toast(e);
    };
    const dispatch = useDispatch();
    const [data, setData] = useState("");
    let schema = useMemo(() =>
        yup.object().shape({
            mobile: getOtpBox
                ? yup
                      .string("Enter phone number")
                      .required("Phone number is required")
                      .test(
                          "test-name",
                          "Enter valid phone nubmer",
                          function (value) {
                              const phoneRegex = /^[0-9]{10}$/; // Change this regex based on requirement
                              let isValidPhone = phoneRegex.test(value);
                              if (!isValidPhone) {
                                  return false;
                              }
                              return true;
                          }
                      )
                : yup.string(),
            otp: getOtpBox
                ? yup.string()
                : yup
                      .string()
                      .required("Please enter four digit otp")
                      .test(
                          "test-name",
                          "Please enter four digit number otp",
                          function (value) {
                              const phoneRegex = /^[0-9]{4}$/; // Change this regex based on requirement
                              let IsValidOtp = phoneRegex.test(value);
                              if (!IsValidOtp) {
                                  //setIsValidOtp(false);
                                  return false;
                              } else {
                                  //setIsValidOtp(true);
                                  return true;
                              }
                          }
                      ),
        })
    );
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
    const onSubmitData = (data) => {
        setData(JSON.stringify(data));
        getMob(data);
        if (getOtpBox) {
            data.countryCode = "+91";
            dispatch(LoginNumber(data, notify));
        } else {
            const newData = {
                mobile: setMob.mobile,
                ip_address: getIp,
                otp: parseInt(data.otp),
                countryCode: "+91",
            };
            dispatch(GetLogin(newData, notify, router));
        }
    };
    useEffect(() => {
        if (getOtpRes == "success") {
            setOtpBox(false);
            setTimeout(() => {
                setResend(true);
            }, 5000);
            reset();
        }
    }, [getOtpRes]);
    useEffect(() => {
        setOtpBox(true);
    }, []);
    const resendOtp = () => {
        setResend(false);
        dispatch(
            LoginNumber({ mobile: setMob.mobile, countryCode: "+91" }, notify)
        );
    };
    const changeNumber = () => {
        setResend(false);
        setOtpBox(true);

        reset({ mobile: setMob.mobile, countryCode: "+91" });
    };
    return (
        <section className="login">
            {loader && <LoaderUi />}
            <ToastContainer />
            <div className="container">
                <div className="login-content">
                    <div className="login-box">
                        <h2>{getOtpBox ? "Login with mobile" : "Enter otp"}</h2>
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmitData)}>
                                {getOtpBox ? (
                                    <>
                                        <div className="form-group">
                                            <i className="icon-email"></i>
                                            <input
                                                {...register("mobile")}
                                                placeholder="Mobile"
                                                className="form-control"
                                            />
                                            <span className="error-msg">
                                                {errors.mobile?.message}
                                            </span>
                                        </div>
                                        <div className="btn-wrap">
                                            <input
                                                type="submit"
                                                className="login-btn"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="forge-pwd">
                                            OTP sent to {setMob.mobile}
                                            <button
                                                className="click-here"
                                                onClick={changeNumber}
                                            >
                                                Click here change
                                            </button>
                                        </div>
                                        <div className="form-group">
                                            <i className="icon-password"></i>
                                            <input
                                                {...register("otp")}
                                                type="text"
                                                placeholder="Otp "
                                                className="form-control"
                                                autoComplete="off"
                                            />
                                            <span className="error-msg">
                                                {errors.otp?.message}
                                            </span>
                                            {showResend ? (
                                                <div className="otp-wrap signup-otp">
                                                    <button
                                                        className="send-otp"
                                                        type="button"
                                                        onClick={resendOtp}
                                                    >
                                                        Resend OTP
                                                    </button>
                                                </div>
                                            ) : (
                                                <Timer />
                                            )}
                                        </div>
                                        <div className="btn-wrap">
                                            <input
                                                type="submit"
                                                className="login-btn"
                                            />
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>
                        <div className="forge-pwd">
                            Login with email?{" "}
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

export default SignWithOtp;
