import React from "react";

import Link from "next/link";

import DiscountBanner1 from "@/shared/assets/images/discountbanner-1.jpg";
import DiscountBanner2 from "@/shared/assets/images/discountbanner-2.jpg";
import DiscountBanner3 from "@/shared/assets/images/discountbanner-3.jpg";

import "./DiscountBlocks.scss";

const DiscountBlocks = () => {
    return (
        <>
            <div className="discount-categories">
                {/* <div className="discount-categories-lists">
          <div className="about-discount">
            <Link href="">
              <img src={DiscountBanner1} alt="discount-banner" />
              <div className="discount-details">
                <span className="save-text">Bundle & Save</span>
                <span className="filter-text">Car Filter Change</span>
                <h4>Special</h4>
              </div>
            </Link>
          </div>
          <div className="about-discount discount-upto">
            <Link href="">
              <img src={DiscountBanner2} alt="discount-banner" />
              <div className="discount-details">
                <h4>uPTO 25% OFF</h4>
                <span className="save-text">on all interior accessories</span>
              </div>
            </Link>
          </div>
        </div> */}
                <div className="discount-categories-lists">
                    <div className="about-discount interior-discount">
                        <Link href="">
                            <img
                                src={DiscountBanner3.src}
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
                    <div className="about-discount">
                        <Link href="">
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
                    <div className="about-discount interior-discount">
                        <Link href="">
                            <img
                                src={DiscountBanner3.src}
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

export default DiscountBlocks;
