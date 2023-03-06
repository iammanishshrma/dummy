import React, { useState } from "react";

import SignWithOtp from "@/shared/components/SignWithOtp/SignWithOtp";
import SignWithEmail from "@/shared/components/SignWithEmail/SignWithEmail";

import "./SignIn.scss";

const SignIn = () => {
    const [showEmail, setShowEMail] = useState(false);
    return (
        <section className="login">
            <div className="container">
                {showEmail ? (
                    <SignWithEmail clickShow={setShowEMail} />
                ) : (
                    <SignWithOtp clickShow={setShowEMail} />
                )}
            </div>
        </section>
    );
};

export default SignIn;
