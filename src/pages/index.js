import React from "react";

import Head from "next/head";

import MainLayout from "@/shared/Layouts/MainLayout";
import HomePage from "@/shared/views/HomePage/HomePage";

const Home = () => {
    return (
        <>
            <Head>
                <title>HomePage</title>
                <meta name="description" content={"This is carorbis."} />
            </Head>
            <MainLayout>
                <HomePage />
            </MainLayout>
        </>
    );
};

export default Home;
