import React from "react";

import Link from "next/link";

import WishlistIcon from "@/shared/assets/images/wishlist.svg";
import "./Wishlist.scss";

const Wishlist = () => {
    return (
        <Link href="/app/my-wishlist" className="wishlist-wrap icons-boxes">
            <div className="wishlist-icon">
                <img src={WishlistIcon.src} alt="wishlist-icon" />
            </div>
            <span className="head-text">Wishlist</span>
        </Link>
    );
};
export default Wishlist;
