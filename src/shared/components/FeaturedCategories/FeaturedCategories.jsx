import React from "react";
import Slider from "react-slick";
import CategoriesBlock from "../CategoriesBlock/CategoriesBlock";
import Img1 from "@/shared/assets/images/img-1.png";
import Img2 from "@/shared/assets/images/img-12.png";
import Img3 from "@/shared/assets/images/img-3.png";
import Img4 from "@/shared/assets/images/img-4.png";
import Img5 from "@/shared/assets/images/img-5.png";
import Img6 from "@/shared/assets/images/img-6.png";
import Img7 from "@/shared/assets/images/img-7.png";
import Img8 from "@/shared/assets/images/img-8.png";
import Img9 from "@/shared/assets/images/img-9.png";
import Img10 from "@/shared/assets/images/img-10.png";
import Img11 from "@/shared/assets/images/img-11.png";
import "./FeaturedCategories.scss";

const FeaturedCategory = () => {
    const ProductContent = [
        {
            title: "Auto Body Parts",
            imageLink: Img1.src,
        },
        {
            title: "Engine Oil",
            imageLink: Img6.src,
        },
        {
            title: "Car Cleaning & Care",
            imageLink: Img11.src,
        },
        {
            title: "Headlights",
            imageLink: Img2.src,
        },
        {
            title: "Wash & Wax",
            imageLink: Img7.src,
        },
        {
            title: "Wheels",
            imageLink: Img5.src,
        },
        {
            title: "Engine & Drivetrain",
            imageLink: Img3.src,
        },
        {
            title: "L&G Batteries",
            imageLink: Img8.src,
        },
        {
            title: "Auto Body Parts",
            imageLink: Img1.src,
        },
        {
            title: "Brake Suspension",
            imageLink: Img4.src,
        },
        {
            title: "Starters",
            imageLink: Img9.src,
        },
        {
            title: "Headlights",
            imageLink: Img2.src,
        },
        {
            title: "Wheels",
            imageLink: Img5.src,
        },
        {
            title: "Brake pads",
            imageLink: Img10.src,
        },
        {
            title: "Engine & Drivetrain",
            imageLink: Img3.src,
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
            <h3>Featured Categories</h3>
            <div className="categories-wrap">
                <div className="categories-lists">
                    {ProductContent.map((data, index) => {
                        return <CategoriesBlock getData={data} key={index} />;
                    })}
                </div>
                <div className="categories-lists categroies-mobile">
                    <Slider {...settings}>
                        {ProductContent.map((data, index) => {
                            return (
                                <CategoriesBlock getData={data} key={index} />
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </>
    );
};
export default FeaturedCategory;
