import React from "react";

import Head from "next/head";

import MainLayout from "@/shared/Layouts/MainLayout";
import ForgetPassword from "@/shared/views/ForgetPassword/ForgetPassword";

const ForgetPasswordPage = () => {
    return (
        <>
            <Head>
                <title>Forget password</title>
                <meta name="description" content={"This is carorbis."} />
            </Head>
            <MainLayout>
                <ForgetPassword />
            </MainLayout>
        </>
    );
};

export default ForgetPasswordPage;
