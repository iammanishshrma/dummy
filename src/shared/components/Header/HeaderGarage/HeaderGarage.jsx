import React, { useState, useEffect, useRef } from "react";
import SearchFilter from "@/shared/components/SearchFilter/SearchFilter";
import SearchIcon from "@/shared/assets/images/garage.svg";
import "../../../../../node_modules/primereact/resources/themes/lara-light-indigo/theme.css";
import "../../../../../node_modules/primereact/resources/primereact.css";
import "./HeaderGarage.scss";

const HeaderGarage = () => {
    const [popUp, setPopUp] = useState(false);
    // const [selectedDrop, setSelectedDrop] = useState(DropdownValue[0].name);
    const [initial, setInitial] = useState(false);
    const ref = useRef();
    const setTrue = () => {
        setInitial(true);
    };
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                setInitial(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [initial]);

    const openPopUp = () => {
        setPopUp(true);
        document.body.classList.toggle("modal-open");
        setInitial(false);
    };
    const closePopUp = () => {
        setPopUp(false);
        document.body.classList.toggle("modal-open");
    };
    return (
        <div className="garage-wrap icons-boxes" ref={ref} onClick={setTrue}>
            <div className="garage-icon">
                <img src={SearchIcon.src} alt="garage-icon" />
            </div>
            <div className="account-wrapper">
                <span className="garage-title">My Garage</span>
                {initial ? (
                    <div className="menu-wrraper">
                        <div className="product-wrp">
                            <h3>My Garage</h3>
                            <button className="clear-all">Clear All</button>
                        </div>
                        <div className="marked-product-wrap">
                            <div className="product-listing">
                                <span className="product-desc">
                                    2022 Acura MDX 2022 Acura
                                </span>
                                <i className="icon-delete"></i>
                            </div>
                        </div>
                        <button className="add-product" onClick={openPopUp}>
                            Add Product
                        </button>
                        <div className="marked-item-wrap">
                            <div className="product-list">
                                <i className="icon-notification"></i>
                                <span className="marked-description">
                                    Get product recommendations
                                </span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className={`pop-up ${popUp ? "active" : ""}`}>
                <div className="popup-wrapper">
                    <div className="popup-content">
                        <SearchFilter />
                    </div>
                </div>
                <button onClick={closePopUp} className="close-btn">
                    <i className="cancel-icon"></i>
                </button>
            </div>
        </div>
    );
};
export default HeaderGarage;
