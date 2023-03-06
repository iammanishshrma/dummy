import Head from "next/head";
import { Provider } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/shared/assets/styles/main.scss";
import favicon from "@/shared/assets/images/favicons/favicon.ico";
import appleTouchIcon from "@/shared/assets/images/favicons/apple-touch-icon.png";
import store from "@/shared/store/store";

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
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
