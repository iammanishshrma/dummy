import React from "react";

import Slider from "react-slick";
import Link from "next/link";

import BreadCrumbSection from "@/shared/components/BreadCrumb/BreadCrumb";
import CategoriesBlock from "@/shared/components/CategoriesBlock/CategoriesBlock";
import FilterData from "@/shared/components/Filters/FilterData/FilterData";
import AllProduct from "@/shared/components/AllProduct/AllProduct";
import Accordion from "@/shared/components/Accordion/Accordion";
import SelectedProduct from "@/shared/components/SelectedProduct/SelectedProduct";
import AdditionalInformation from "../../components/AdditionalInformation/AdditionalInformation";
import Img1 from "../../assets/images/img-1.png";
import Img2 from "../../assets/images/img-2.png";
import Img3 from "../../assets/images/img-3.png";
import Img4 from "../../assets/images/img-4.png";
import Img5 from "../../assets/images/img-5.png";
import Img6 from "../../assets/images/img-8.png";
import DiscountBanner1 from "../../assets/images/discountbanner-1.jpg";
import DiscountBanner2 from "../../assets/images/discountbanner-2.jpg";
import "./Listing.scss";

const Listing = (props) => {
    const breadcumData = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "All Product",
            link: "/product-listing",
        },
    ];
    const ListingProducts = [
        {
            title: "Auto Body Parts",
            imageLink: Img1.src,
        },
        {
            title: "Headlights",
            imageLink: Img2.src,
        },
        {
            title: "Engine & Drivetrain",
            imageLink: Img3.src,
        },
        {
            title: "Brake Suspension",
            imageLink: Img4.src,
        },
        {
            title: "Wheels",
            imageLink: Img5.src,
        },
        {
            title: "Batteries",
            imageLink: Img6.src,
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
    var settings2 = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="product-listing">
                <div className="container">
                    <BreadCrumbSection breadcumData={breadcumData} />
                    <div className="main-wrapper">
                        <div className="ltl-wrapper">
                            <FilterData />
                        </div>
                        <div className="product-details">
                            <h1>All Products</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sagittis urna, scelerisque
                                fusce vel sagittis urna eget nunc. Eget
                                penatibus metus, volutpat fusce donec vel
                                tortor. Mi volutpat dui sed in. Pulvinar tempus
                                dignissim lobortis imperdiet tortor suspendisse
                                lectus nulla nunc.
                            </p>
                            <div className="product-blocks">
                                <div className="brands-wrap">
                                    <Slider {...settings}>
                                        {ListingProducts.map((data, index) => {
                                            return (
                                                <CategoriesBlock
                                                    getData={data}
                                                    key={index}
                                                />
                                            );
                                        })}
                                    </Slider>
                                </div>
                                <div className="brands-wrap desktop-data">
                                    {ListingProducts.map((data, index) => {
                                        return (
                                            <CategoriesBlock
                                                getData={data}
                                                key={index}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="product-discount">
                                <div className="discount-categories">
                                    <div className="discount-categories-lists">
                                        <Slider {...settings2}>
                                            <div className="about-discount">
                                                <Link href="">
                                                    <img
                                                        src={
                                                            DiscountBanner1.src
                                                        }
                                                        alt="discount-banner"
                                                    />
                                                    <div className="discount-details">
                                                        <span className="save-text">
                                                            Bundle & Save
                                                        </span>
                                                        <span className="filter-text">
                                                            Car Filter Change
                                                        </span>
                                                        <h4>Special</h4>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="about-discount discount-upto">
                                                <Link href="">
                                                    <img
                                                        src={
                                                            DiscountBanner2.src
                                                        }
                                                        alt="discount-banner"
                                                    />
                                                    <div className="discount-details">
                                                        <h4>uPTO 25% OFF</h4>
                                                        <span className="save-text">
                                                            on all interior
                                                            accessories
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="about-discount discount-upto">
                                                <Link href="">
                                                    <img
                                                        src={
                                                            DiscountBanner2.src
                                                        }
                                                        alt="discount-banner"
                                                    />
                                                    <div className="discount-details">
                                                        <h4>uPTO 25% OFF</h4>
                                                        <span className="save-text">
                                                            on all interior
                                                            accessories
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="about-discount discount-upto">
                                                <Link href="">
                                                    <img
                                                        src={
                                                            DiscountBanner2.src
                                                        }
                                                        alt="discount-banner"
                                                    />
                                                    <div className="discount-details">
                                                        <h4>uPTO 25% OFF</h4>
                                                        <span className="save-text">
                                                            on all interior
                                                            accessories
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="about-discount discount-upto">
                                                <Link href="">
                                                    <img
                                                        src={
                                                            DiscountBanner2.src
                                                        }
                                                        alt="discount-banner"
                                                    />
                                                    <div className="discount-details">
                                                        <h4>uPTO 25% OFF</h4>
                                                        <span className="save-text">
                                                            on all interior
                                                            accessories
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="about-discount discount-upto">
                                                <Link href="">
                                                    <img
                                                        src={
                                                            DiscountBanner2.src
                                                        }
                                                        alt="discount-banner"
                                                    />
                                                    <div className="discount-details">
                                                        <h4>uPTO 25% OFF</h4>
                                                        <span className="save-text">
                                                            on all interior
                                                            accessories
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <SelectedProduct />
                            <AllProduct />
                        </div>
                    </div>
                    <Accordion />
                    <AdditionalInformation />
                </div>
            </div>
        </>
    );
};
export default Listing;
