import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import "../../../../../node_modules/primereact/resources/themes/lara-light-indigo/theme.css";
import "../../../../../node_modules/primereact/resources/primereact.css";

import "./HeaderSignIn.scss";
import Cookies from "js-cookie";

const DropdownValue = [
    { name: "Sign In", link: "/sign-in" },
    { name: "Sign Up", link: "/sign-up" },
    { name: "Account", link: "my-profile" },
    { name: "Orders", link: "my-orders" },
];

const HeaderSignIn = () => {
    const getUser = useSelector((state) => state.getUserSlice);
    const loginState = useSelector((state) => state.checkLoginSlice.isLoggedIn);
    const [initial, setInitial] = useState(false);
    const router = useRouter();
    // close dropdown on outside click
    const ref = useRef();
    useEffect(() => {
        const checkIfClickOutSide = (e) => {
            if (!ref.current.contains(e.target)) {
                setInitial(false);
            }
        };
        // Add clicked event
        document.addEventListener("click", checkIfClickOutSide);
        return () => {
            document.removeEventListener("click", checkIfClickOutSide);
        };
    }, [initial]);

    // const onDropChange = (e) => {
    //   setInitial(false);
    // };
    const handleDropdown = () => {
        setInitial(!initial);
    };
    const logOutHandler = () => {
        localStorage.clear("token");
        Cookies.remove("token");
        router.push("/sign-in");
    };
    return (
        <div className="signin-wrap icons-boxes">
            <span className="title">
                Hello, {loginState ? getUser.name : <>Sign in</>}
            </span>
            <div className="arrow-div" ref={ref}>
                <div className="account-wrapper">
                    <h3 onClick={handleDropdown}>My Account</h3>
                    {initial && (
                        <div className="menu-wrraper">
                            <ul className="account-menu">
                                {loginState ? (
                                    <>
                                        <li>
                                            <Link
                                                href="/my-profile"
                                                className="nav-links"
                                            >
                                                Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/my-orders"
                                                className="nav-links"
                                            >
                                                Orders
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                className="nav-links"
                                                onClick={logOutHandler}
                                            >
                                                Log Out
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                href="/sign-in"
                                                className="nav-links"
                                            >
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/sign-up"
                                                className="nav-links"
                                            >
                                                Sign Up
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default HeaderSignIn;
