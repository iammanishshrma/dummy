import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <Script
                src="https://accounts.google.com/gsi/client"
                strategy="beforeInteractive"
                async
                defer
            />
            <Script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0&appId=758578365717574&autoLogAppEvents=1"
                nonce="5zXzbKct"
                strategy="beforeInteractive"
            />
            <Script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="beforeInteractive"
            />
            <body>
                <Main />
                <div id="fb-root"></div>
                <NextScript />
            </body>
        </Html>
    );
}
