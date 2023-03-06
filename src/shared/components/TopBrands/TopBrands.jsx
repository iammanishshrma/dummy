import React from "react";

import Link from "next/link";
import Slider from "react-slick";

import CategoriesBlock from "../CategoriesBlock/CategoriesBlock";
import Img1 from "@/shared/assets/images/tata.png";
import Img2 from "@/shared/assets/images/suzuki.png";
import Img3 from "@/shared/assets/images/honda.png";
import Img4 from "@/shared/assets/images/motors.png";
import Img5 from "@/shared/assets/images/ford.png";
import Img6 from "@/shared/assets/images/hyundai.png";
import Img7 from "@/shared/assets/images/kia.png";
import Img8 from "@/shared/assets/images/Volkswagon.png";
import Img9 from "@/shared/assets/images/Mahindra.png";
import Img10 from "@/shared/assets/images/jeep.png";
import Img11 from "@/shared/assets/images/toyota.png";
import Img12 from "@/shared/assets/images/Citreon.png";

import "./TopBrands.scss";

const TopBrands = () => {
    const BrandDetails = [
        {
            imageLink: Img1.src,
            title: "Tata",
        },
        {
            imageLink: Img2.src,
            title: "Maruti Suzuki",
        },
        {
            imageLink: Img3.src,
            title: "Honda",
        },
        {
            imageLink: Img4.src,
            title: "MG Motors",
        },
        {
            imageLink: Img5.src,
            title: "Ford",
        },
        {
            imageLink: Img6.src,
            title: "Hyundai",
        },
        {
            imageLink: Img7.src,
            title: "Kia",
        },
        {
            imageLink: Img8.src,
            title: "Volkswagon",
        },
        {
            imageLink: Img9.src,
            title: "Mahindra",
        },
        {
            imageLink: Img10.src,
            title: "Jeep",
        },
        {
            imageLink: Img11.src,
            title: "Toyota",
        },
        {
            imageLink: Img12.src,
            title: "Citreon",
        },
    ];
    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <h3>Top Brands</h3>
            <div className="brands-wrap">
                <Slider {...settings}>
                    {BrandDetails.map((data, index) => {
                        return <CategoriesBlock getData={data} key={index} />;
                    })}
                </Slider>
            </div>

            <div className="brands-wrap desktop-data">
                {BrandDetails.map((data, index) => {
                    return <CategoriesBlock getData={data} key={index} />;
                })}
            </div>
            <div className="view-brands">
                <Link href="/view-brand">
                    View All Brands
                    <span className="arrow">
                        <svg
                            width="13"
                            height="8"
                            viewBox="0 0 13 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.25 1.5L6.25 6.5L11.25 1.5"
                                stroke="#111E6C"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </>
    );
};

export default TopBrands;
