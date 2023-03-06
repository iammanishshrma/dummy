import React from "react";

import Head from "next/head";

import MainLayout from "@/shared/Layouts/MainLayout";
import SignUp from "@/shared/views/SignUp/SignUp";

const SignUpPage = () => {
    return (
        <>
            <Head>
                <title>Sign up</title>
                <meta name="description" content={"This is carorbis."} />
            </Head>
            <MainLayout>
                <SignUp />
            </MainLayout>
        </>
    );
};

export default SignUpPage;
