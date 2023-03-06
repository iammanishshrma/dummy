import React from "react";

import Link from "next/link";

import CartIcon from "@/shared/assets/images/cart.svg";
import "./HeaderCart.scss";

const HeaderCart = () => {
    return (
        <Link href="/app/my-cart" className="cart-wrap icons-boxes">
            <div className="cart-icon">
                <span className="notifications">12</span>
                <img src={CartIcon.src} alt="cart-icon" />
            </div>
            <span className="head-text">Cart</span>
        </Link>
    );
};
export default HeaderCart;
