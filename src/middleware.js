import { NextResponse } from "next/server";

export default function middleware(req) {
    let varify = req.cookies.get("token");
    let url = req.url;

    if (!varify && url.includes("/my-profile")) {
        return NextResponse.redirect("http://localhost:3000/sign-in");
    }
    if (!varify && url.includes("/my-orders")) {
        return NextResponse.redirect("http://localhost:3000/sign-in");
    }
    if (varify && url.includes("/sign-in")) {
        return NextResponse.redirect("http://localhost:3000/");
    }
    if (varify && url.includes("/sign-up")) {
        return NextResponse.redirect("http://localhost:3000/");
    }
}
export const config = {
    matcher: ["/my-profile", "/my-orders", "/sign-in", "/sign-up"],
};
