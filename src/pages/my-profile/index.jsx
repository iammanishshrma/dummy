import React from "react";

import Head from "next/head";

import MainLayout from "@/shared/Layouts/MainLayout";
import MyProfile from "@/shared/views/MyProfile/MyProfile";

const MyProfilePage = () => {
    return (
        <>
            <Head>
                <title>My profile</title>
                <meta name="description" content={"This is carorbis."} />
            </Head>
            <MainLayout>
                <MyProfile />
            </MainLayout>
        </>
    );
};

export default MyProfilePage;
