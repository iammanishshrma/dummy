import { NextResponse } from "next/server";

export default function middleware(req) {
    let varify = req.cookies.get("token");
    let url = req.url;

    if (!varify && url.includes("/my-profile")) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    if (!varify && url.includes("/my-orders")) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    if (varify && url.includes("/sign-in")) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    if (varify && url.includes("/sign-up")) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}
export const config = {
    matcher: ["/my-profile", "/my-orders", "/sign-in", "/sign-up"],
};
