import Head from "next/head";
import { Provider } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/shared/assets/styles/main.scss";
import favicon from "@/shared/assets/images/favicons/favicon.ico";
import appleTouchIcon from "@/shared/assets/images/favicons/apple-touch-icon.png";
import store from "@/shared/store/store";
import Script from "next/script";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <title>Carorbis</title>
                    <link rel="icon" type="image/x-icon" href={favicon.src} />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={appleTouchIcon.src}
                    ></link>
                    <meta name="description" content={"This is carorbis."} />
                </Head>

                <Script src="https://accounts.google.com/gsi/client" async />
                <Script
                    async
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0&appId=758578365717574&autoLogAppEvents=1"
                    nonce="5zXzbKct"
                />
                <Script
                    async
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js"
                />
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
