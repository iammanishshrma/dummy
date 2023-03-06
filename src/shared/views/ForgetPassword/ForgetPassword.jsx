import React, { useState } from "react";

import ForgetWithMobile from "./components/ForgetWithMobile";
import ForgetWithEmail from "./components/ForgetWithEmail";
import CustomRadio from "@/shared/components/CustomRadio/CustomRadio";
import "./ForgetPassword.scss";

const ForgetPassword = () => {
    const [isForgetWithMobile, setIsForgetWithMobile] = useState(true);

    // Function to handle the change in forget password mode
    const radioChangeHandler = (event) => {
        const radioValue = event.target.value;

        if (radioValue === "mobile") {
            setIsForgetWithMobile(true);
        } else {
            setIsForgetWithMobile(false);
        }
    };
    return (
        <section className="forget-password">
            <div className="container">
                <div className="forget-box">
                    <h2>Forget Password</h2>
                    <div style={{ display: "flex", marginBottom: "30px" }}>
                        <CustomRadio
                            value={"mobile"}
                            items={{ name: "Mobile" }}
                            name={"radio"}
                            onChange={radioChangeHandler}
                            checked={isForgetWithMobile}
                        />
                        <CustomRadio
                            style={{ marginLeft: "20px" }}
                            value={"email"}
                            items={{ name: "Email" }}
                            name={"radio"}
                            onChange={radioChangeHandler}
                            checked={!isForgetWithMobile}
                        />
                    </div>
                    {isForgetWithMobile ? (
                        <ForgetWithMobile />
                    ) : (
                        <ForgetWithEmail />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;
