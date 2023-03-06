import React from "react";

import BreadCrumbSection from "@/shared/components/BreadCrumb/BreadCrumb";
import LeftAccountPanel from "@/shared/components/LeftAccountPanel/LeftAccountPanel";
import RightPanel from "./Components/RightPanel/RightPanel";
import "./ChangeUserPassword.scss";

const ChangeUserPassword = () => {
    const breadcumData = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "All Product",
            link: "/product-listing",
        },
        {
            name: "Login & Security",
            link: "/my-profile",
        },
    ];
    return (
        <div className="my-account">
            <div className="container">
                <BreadCrumbSection breadcumData={breadcumData} />
                <div className="account-details">
                    <LeftAccountPanel />
                    <RightPanel />
                </div>
            </div>
        </div>
    );
};

export default ChangeUserPassword;
