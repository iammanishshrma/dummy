import React from "react";

import Link from "next/link";

import DiscountBanner1 from "@/shared/assets/images/discountbanner-1-new.jpg";
import DiscountBanner2 from "@/shared/assets/images/discountbanner-2-new.jpg";
import "./DiscountNew.scss";

const DiscountNew = () => {
    return (
        <>
            <div className="discount-categories">
                <div className="discount-categories-lists">
                    <div className="about-discount">
                        <Link href="/">
                            <img
                                src={DiscountBanner1.src}
                                alt="discount-banner"
                            />
                            <div className="discount-details">
                                <span className="save-text">Bundle & Save</span>
                                <span className="filter-text">
                                    Car Filter Change
                                </span>
                                <h4>Special</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="about-discount discount-upto">
                        <Link href="/">
                            <img
                                src={DiscountBanner2.src}
                                alt="discount-banner"
                            />
                            <div className="discount-details">
                                <h4>uPTO 25% OFF</h4>
                                <span className="save-text">
                                    on all interior accessories
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiscountNew;
