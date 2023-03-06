import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import {
    getTodoAsync,
    getOtpNew,
    reSendOtp,
    clearState,
} from "@/shared/store/slices/SignUpSlice";
import LoaderUi from "@/shared/components/LoaderUi/LoaderUi";
import Timer from "@/shared/components/Timer/Timer";
import SocialLogin from "@/shared/components/SocialLogin/SocialLogin";
import "react-toastify/dist/ReactToastify.css";
import "../SignIn/SignIn.scss";
import "./SignUp.scss";

const SignUp = () => {
    const router = useRouter();
    const notify = (e) => {
        toast(e);
    };
    const loader = useSelector((state) => state.SignUpSlice.loading);
    const getToken = useSelector((state) => state.SignUpSlice.sucessStatus);
    const notifyMsg = useSelector((state) => state.SignUpSlice.notifyMsg);
    const languageList = useSelector((state) => state.languageListSlice);
    const getIp = useSelector((state) => state.systemIpSlice?.systemIp);
    const dispatch = useDispatch();
    const [submitOtp, setSubmitOtp] = useState(false);
    const [isValidOtp, setIsValidOtp] = useState(false);
    const [value, setValue] = useState(true);
    const [resend, setresend] = useState(false);
    const [GetMobEnter, setMobEnter] = useState(false);
    const [pwdShow, setShowPwd] = useState(false);
    const [initialValues, setInitialValues] = useState({
        name: null,
        email: null,
        password: null,
        mobile: null,
        otp: null,
    });
    const showPwd = () => {
        setShowPwd(!pwdShow);
    };
    let schema = yup.object().shape({
        firstName: yup
            .string()
            .required("Please enter user name")
            .matches(/^[A-Za-z\s]+$/, "Must contain character"),
        email: yup
            .string()
            .email("Invalid email format")
            .required("Please enter email"),
        password: yup
            .string()
            .required("Please enter password")
            .test(
                "test-name",
                "Minimum 4 and max 20 character allowed",
                function (value) {
                    const nameRegix = /^.{4,20}$/; // Change this regex based on requirement
                    let isValidEMail = nameRegix.test(value);
                    if (!isValidEMail) {
                        return false;
                    }
                    return true;
                }
            ),
        confirmPwd: yup
            .string()
            .required("Please enter password")
            .oneOf([yup.ref("password")], "Passwords does not match"),
        mobile: yup
            .string()
            .required("Please enter phone number")
            .test("test-name", "Enter valid phone nubmer", function (value) {
                const phoneRegex = /^[0-9]{10}$/; // Change this regex based on requirement
                let isValidPhone = phoneRegex.test(value);
                if (!isValidPhone) {
                    return false;
                }
                return true;
            }),
        otp: yup
            .string()
            .required("Please enter four digit otp")
            .test(
                "test-name",
                "Please enter four digit number otp",
                function (value) {
                    const phoneRegex = /^[0-9]{4}$/; // Change this regex based on requirement
                    let IsValidOtp = phoneRegex.test(value);
                    if (!IsValidOtp) {
                        setIsValidOtp(false);
                        return false;
                    } else {
                        setIsValidOtp(true);
                        return true;
                    }
                }
            ),
    });
    const {
        register,
        handleSubmit,
        reset,
        watch,
        getValues,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const watchAllFields = watch();

    // Send Otp
    let errorArr = Object.keys(errors).filter((item) => item !== "otp");
    useEffect(() => {
        if (
            !errorArr.length &&
            getVal.firstName &&
            getVal.email &&
            getVal.password &&
            getVal.confirmPwd &&
            getVal.mobile
        ) {
            setMobEnter(true);
            if (isValidOtp) {
                setIsValidOtp(true);
            }
        } else {
            if (!isValidOtp || isValidOtp) {
                setIsValidOtp(false);
            }
            setMobEnter(false);
        }

        return () => {
            dispatch(clearState());
        };
    }, [watchAllFields]);

    const sendOtp = (e) => {
        e.preventDefault();
        let getMobile = getValues();
        dispatch(
            getOtpNew({ countryCode: "+91", mobile: getMobile.mobile }, notify)
        );
    };

    // Resend/submit button show/hide on send otp failure
    useEffect(() => {
        if (getToken == true) {
            setValue(false);
            setSubmitOtp(true);
            setTimeout(() => {
                setresend(true);
            }, 5000);
        }
    }, [getToken]);
    useEffect(() => {
        if (notifyMsg) notify(notifyMsg);
    }, [notifyMsg]);

    // Resend otp
    let getVal = getValues();
    const resendOtp = () => {
        let getMobile = getValues();
        // dispatch(reSendOtp({ email: getMobile.email, mobile: getMobile.mobile }, notify))
        dispatch(
            reSendOtp({ countryCode: "+91", mobile: getMobile.mobile }, notify)
        );
        setValue(false);
        setresend(false);
        setTimeout(() => {
            setresend(true);
        }, 5000);
    };

    // Submit Btn
    const onSubmitHandler = (data) => {
        let dataMain = {
            name: data.firstName,
            email: data.email,
            password: data.password,
            mobile: data.mobile,
            otp: parseInt(data.otp),
            countryCode: "+91",
            ip_address: getIp,
        };
        dispatch(
            getTodoAsync({ data: { ...initialValues, ...dataMain }, router })
        );
        if (data.status == "sucess") reset();
    };

    return (
        <>
            <section className="login">
                {loader && <LoaderUi />}
                <ToastContainer />
                <div className="container">
                    <div className="login-content">
                        <div className="login-box">
                            <h2>Sign Up</h2>
                            <div className="login-form">
                                <form onSubmit={handleSubmit(onSubmitHandler)}>
                                    <div className="form-group">
                                        <i className="icon-email"></i>
                                        <input
                                            {...register("firstName")}
                                            placeholder="Name"
                                            className="form-control"
                                        />
                                        <span className="error-msg">
                                            {errors.firstName?.message}
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <i className="icon-mail"></i>
                                        <input
                                            {...register("email")}
                                            placeholder="email"
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
                                            placeholder="Password"
                                            type={pwdShow ? "text" : "password"}
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
                                    <div className="form-group">
                                        <i className="icon-password"></i>
                                        <input
                                            {...register("confirmPwd")}
                                            placeholder="Confirm password"
                                            type="text"
                                            //{pwdShow ? "text" : "confirm password"}
                                            className="form-control"
                                        />
                                        <span className="error-msg">
                                            {errors.confirmPwd?.message}
                                        </span>
                                        {/* <i
                      className={`icon-eye ${pwdShow ? "active" : ""}`}
                      onClick={showPwd}
                    ></i> */}
                                    </div>
                                    <div className="form-group">
                                        <i className="icon-mobile"></i>
                                        <input
                                            {...register("mobile")}
                                            placeholder="Mobile number"
                                            className="form-control"
                                        />
                                        <span className="error-msg">
                                            {errors.mobile?.message}
                                        </span>
                                        {GetMobEnter ? (
                                            <div className="otp-wrap signup-otp">
                                                {resend || value ? (
                                                    <button
                                                        className="send-otp"
                                                        onClick={
                                                            value
                                                                ? sendOtp
                                                                : resend
                                                                ? resendOtp
                                                                : null
                                                        }
                                                    >
                                                        {value
                                                            ? "Get OTP"
                                                            : resend
                                                            ? "Resend OTP"
                                                            : null}
                                                    </button>
                                                ) : null}
                                            </div>
                                        ) : null}
                                        {!(value || resend) ? <Timer /> : null}
                                    </div>
                                    {submitOtp ? (
                                        <div className="otp-val">
                                            <div className="form-group">
                                                <input
                                                    {...register("otp")}
                                                    placeholder="OTP"
                                                    className="form-control otp-control"
                                                />
                                                <span className="error-msg">
                                                    {errors.otp?.message}
                                                </span>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className="btn-wrap">
                                        <input
                                            type="submit"
                                            disabled={!isValidOtp}
                                            className="login-btn"
                                        />
                                    </div>
                                </form>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
