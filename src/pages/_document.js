import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <script src="https://accounts.google.com/gsi/client" defer />
            <script
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0&appId=758578365717574&autoLogAppEvents=1"
                nonce="5zXzbKct"
            />
            <script
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_US/sdk.js"
            />
            <body>
                <Main />
                <div id="fb-root"></div>
                <NextScript />
            </body>
        </Html>
    );
}
