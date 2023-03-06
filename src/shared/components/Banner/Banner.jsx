import React from "react";

import Slider from "react-slick";
import Link from "next/link";

import BannerImage from "@/shared/assets/images/banner.jpg";
import "./Banner.scss";

const Banner = () => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings} className="banner-block">
                <div className="banner-wrap">
                    <img src={BannerImage.src} alt="banner" />
                    <div className="container">
                        <h1>FLAT 20% OFF THIS WEEK</h1>
                        <span className="banner-head">
                            On High End Car Exteriors
                        </span>
                        <div className="btn">
                            <Link href="">
                                Shop Now
                                <svg
                                    width="21"
                                    height="18"
                                    viewBox="0 0 21 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.57572 16.5L1.28784 15.2121L7.46208 9L1.28784 2.78788L2.57572 1.5L9.99996 9L2.57572 16.5Z"
                                        fill="white"
                                        stroke="white"
                                    />
                                    <path
                                        d="M12.2879 16.5L11 15.2121L17.1742 9L11 2.78788L12.2879 1.5L19.7121 9L12.2879 16.5Z"
                                        fill="white"
                                        stroke="white"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="banner-wrap">
                    <img src={BannerImage.src} alt="banner" />
                    <div className="container">
                        <h1>FLAT 20% OFF THIS WEEK</h1>
                        <span className="banner-head">
                            On High End Car Exteriors
                        </span>
                        <div className="btn">
                            <Link href="">
                                Shop Now
                                <svg
                                    width="21"
                                    height="18"
                                    viewBox="0 0 21 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.57572 16.5L1.28784 15.2121L7.46208 9L1.28784 2.78788L2.57572 1.5L9.99996 9L2.57572 16.5Z"
                                        fill="white"
                                        stroke="white"
                                    />
                                    <path
                                        d="M12.2879 16.5L11 15.2121L17.1742 9L11 2.78788L12.2879 1.5L19.7121 9L12.2879 16.5Z"
                                        fill="white"
                                        stroke="white"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
};
export default Banner;
