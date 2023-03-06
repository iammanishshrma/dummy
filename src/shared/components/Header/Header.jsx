import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

import OfferHeader from "./OfferHeader/OfferHeader";
import SearchHeader from "./SearchHeader/SearchHeader";
import HeaderSignIn from "./HeaderSignIn/HeaderSignIn";
import HeaderGarage from "./HeaderGarage/HeaderGarage";
import Wishlist from "./Wishlist/Wishlist";
import HeaderCart from "./HeaderCart/HeaderCart";
import NavigationBar from "./NavBar/NavBar";
import { isLoggedIn } from "@/shared/utils/auth";

import Logo from "@/shared/assets/images/Carorbis.svg";
import CrossBtn from "@/shared/assets/images/cross-btn.svg";
import "./Header.scss";

import { checkloginState } from "@/shared/store/slices/checkLoginSlice";
import { getUserDetail } from "@/shared/store/slices/getUserSlice";
import { getLanguageList } from "@/shared/store/slices/languageListSlice";
import { getsystemIp } from "@/shared/store/slices/systemIpSlice";

const Header = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const isUserLoggedIn = isLoggedIn();
        dispatch(checkloginState(isUserLoggedIn));
        if (isUserLoggedIn) {
            dispatch(getUserDetail());
        }
    }, []);
    const [getToggle, setToggle] = useState(false);
    const ref = useRef();
    const onGameItemClick = () => {
        setToggle(false);
    };
    useEffect(() => {
        if (getToggle === true) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        const checkIfClickedOutside = (e) => {
            if (ref.current === e.target) {
                setToggle(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [getToggle]);

    useEffect(() => {
        dispatch(getLanguageList());
        dispatch(getsystemIp());
    }, [dispatch]);
    return (
        <>
            <ToastContainer />
            <header>
                <OfferHeader />
                <div className="primary-header">
                    <div className="container">
                        {/* SideBar in Header */}
                        {getToggle ? (
                            <div className="side-menu-wrap" ref={ref}>
                                <button
                                    className="close-btn"
                                    onClick={() => setToggle(false)}
                                >
                                    <img src={CrossBtn.src} alt="cross-icon" />
                                </button>
                                <div className="navigation-wrap">
                                    <NavigationBar
                                        onGameItemClick={onGameItemClick}
                                    />
                                </div>
                            </div>
                        ) : null}
                        <div className="search-wrap">
                            <div className="logo-wrap">
                                <button
                                    className="hamburger"
                                    onClick={() => setToggle(true)}
                                >
                                    <span className="hamburgers"></span>
                                    <span className="hamburgers "></span>
                                    <span className="hamburgers"></span>
                                </button>
                                <div className="logo">
                                    <Link href="/">
                                        <img src={Logo.src} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <SearchHeader />
                        </div>
                        <div className="icons-wrap">
                            <HeaderSignIn />
                            <HeaderGarage />
                            <Wishlist />
                            <HeaderCart />
                        </div>
                    </div>
                </div>
                <div className="navigation-wrap">
                    <div className="container">
                        <NavigationBar />
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
