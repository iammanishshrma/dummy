import React from "react";

import SliderImage from "./SliderImage/SliderImage";
import SliderImg1 from "@/shared/assets/images/slider-img1-small.png";
import SliderImg2 from "@/shared/assets/images/slider-new-img1.png";
import SliderImg3 from "@/shared/assets/images/slider-new-img2.png";
import LargeImage1 from "@/shared/assets/images/slider-img1-big.png";
import SliderContent from "./SliderContent/SliderContent";
import "./AboutProduct.scss";

const AboutProduct = () => {
    const sliderImg = [
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg2,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg3,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
        {
            image: SliderImg1,
            largeImageSrc: LargeImage1,
        },
    ];
    const productDetail = {
        productName:
            "PegasusPremium PU Leatherite Car Seat Cover for Tata Punch (Black and Coffee)",
        brand: "Pegasus Premium",
        rating: { rate: 4 },
        ratingCount: 81,
        actualPrice: 2500,
        DiscountPrice: 1499.0,
        discount: "40%",
        unit: "10",
        wishlist: false,
        date: "Fri, 22 July",
        soldBy: "Pegasus Premium Pvt. ltd.",
        offersCount: "2",
        country: "USA",
        manufactureDetails: {
            "Part Number": "RRA771321",
            Origin: "OEM",
            Class: "HC",
        },
    };

    return (
        <div className="slider-content">
            <div className="lgt-slider">
                <SliderImage sliderImg={sliderImg} />
            </div>
            <div className="rgt-slider">
                <SliderContent productDetail={productDetail} />
            </div>
        </div>
    );
};

export default AboutProduct;
