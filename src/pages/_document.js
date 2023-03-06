import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <div id="fb-root"></div>
                <NextScript />
            </body>
        </Html>
    );
}
