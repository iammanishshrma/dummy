import React, { useRef } from "react";

import Slider from "react-slick";
import loadable from "@loadable/component";
import Link from "next/link";
const DetailNavigationComponent = loadable(() =>
    import("@/shared/components/DetailNavigation/DetailNavigation")
);

import ProductImage1 from "@/shared/assets/images/product-1.png";
import ProductImage2 from "@/shared/assets/images/product-2.png";
import ProductImage3 from "@/shared/assets/images/product-3.png";
import ProductImage4 from "@/shared/assets/images/product-4.png";
import ProductImage5 from "@/shared/assets/images/product-5.png";
import DiscountRupee from "@/shared/assets/images/grey-rupee.svg";
import ActualRupee from "@/shared/assets/images/rupee.svg";

import AboutProduct from "@/shared/components/AboutProduct/AboutProduct";
import BreadCrumbSection from "@/shared/components/BreadCrumb/BreadCrumb";
import Products from "@/shared/components/Products/Products";
import Accordion from "@/shared/components/Accordion/Accordion";
import Reviews from "@/shared/components/Reviews/Reviews";

import DetailProduct from "../../components/DetailProduct/DetailProduct";
import Features from "../../components/Features/Features";
import Warranty from "../../components/Warranty/Warranty";
import "./ProductDetails.scss";

const ProductDetails = () => {
    const faqRef = useRef();
    const reviewsRef = useRef();

    const breadcumData = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "All Product",
            link: "/product-listing",
        },
        {
            name: "Seat Covers",
            link: "/product-details",
        },
    ];
    const ProductDetails = [
        {
            ImageLink: ProductImage1.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Portronics AUTO 10 POR-320, Bluetooth device demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 4 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage2.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName: "AUTO CAR WINNER Beige Car Armrest for Maruti Ritz",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 3 },
            ratingCount: 80,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage3.src,
            Recomended: "Recommended",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Auto-Ex Gear Lever Shifter Knob Compatible, Rep emo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 2 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage4.src,
            Recomended: "",
            TopRated: "Top Rated",
            BrandName: "Brand Name",
            ProductName:
                "Amkette iGrip Easy View One Touch Dashboard and demo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 1 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage3.src,
            Recomended: "Recommended",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Auto-Ex Gear Lever Shifter Knob Compatible, Rep emo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 2 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage1.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Portronics AUTO 10 POR-320, Bluetooth device demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 4 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage2.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName: "AUTO CAR WINNER Beige Car Armrest for Maruti Ritz",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 3 },
            ratingCount: 80,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage5.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Kimloo Car G7 Universal Bluetooth USB Car demo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 4 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage2.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName: "AUTO CAR WINNER Beige Car Armrest for Maruti Ritz",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 3 },
            ratingCount: 80,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage1.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Portronics AUTO 10 POR-320, Bluetooth device demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 4 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage4.src,
            Recomended: "",
            TopRated: "Top Rated",
            BrandName: "Brand Name",
            ProductName:
                "Amkette iGrip Easy View One Touch Dashboard and demo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 1 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage3.src,
            Recomended: "Recommended",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Auto-Ex Gear Lever Shifter Knob Compatible, Rep emo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 2 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage4.src,
            Recomended: "",
            TopRated: "Top Rated",
            BrandName: "Brand Name",
            ProductName:
                "Amkette iGrip Easy View One Touch Dashboard and demo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 1 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage1.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Portronics AUTO 10 POR-320, Bluetooth device demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 4 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage3.src,
            Recomended: "Recommended",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName:
                "Auto-Ex Gear Lever Shifter Knob Compatible, Rep emo demo demo",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 2 },
            ratingCount: 81,
            OfferPercent: "(40% Off)",
        },
        {
            ImageLink: ProductImage2.src,
            Recomended: "",
            TopRated: "",
            BrandName: "Brand Name",
            ProductName: "AUTO CAR WINNER Beige Car Armrest for Maruti Ritz",
            DiscountRupees: DiscountRupee.src,
            DiscountPrice: 2500,
            ActualRupees: ActualRupee.src,
            ActualPrice: 1499.0,
            rating: { rate: 3 },
            ratingCount: 80,
            OfferPercent: "(40% Off)",
        },
    ];
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    // const tabList = [
    //   {
    //     name: "Product Details",
    //     id: "product-details",
    //   },
    //   {
    //     name: "Features",
    //     id: "features",
    //   },
    //   {
    //     name: "Warranty",
    //     id: "warranty",
    //   },
    // ]
    // const navList = [
    //   {
    //     name: "Reviews",
    //     id: "reviews",
    //   },
    //   {
    //     name: "FAqs",
    //     id: "faqs",
    //   },
    // ];
    const ratingData = [
        {
            avgRating: "4.2",
            globalRating: "1000",
            ratingPercent: {
                5: "70",
                4: "15",
                3: "08",
                2: "05",
                1: "02",
            },
            totalReviews: "256",
        },
    ];

    return (
        <div className="product-listing">
            <div className="container">
                <BreadCrumbSection breadcumData={breadcumData} />
                <AboutProduct />
                <DetailNavigationComponent
                    reviewsRef={reviewsRef}
                    faqRef={faqRef}
                />
                <div className="content-block">
                    {/* <DetailProduct />
            <Features />
            <Warranty /> */}
                    <div
                        className="details-block"
                        id="reviews"
                        ref={reviewsRef}
                    >
                        <div className="review-head">
                            <h3>Reviews</h3>
                            <Link href="/" className="return-back">
                                <i className="icon-back"></i>Return
                            </Link>
                        </div>
                        <Reviews ratingData={ratingData} />
                    </div>
                </div>
                <div className="product-sliders">
                    {/* <div className="similar-products">
              <h3>Similar Products</h3>
              <Slider {...settings}>
                {ProductDetails.map((item, index) => {
                  return <Products getData={item} key={index} />;
                })}
              </Slider>
            </div> */}
                    <div className="similar-products">
                        <h3>Recommended Products</h3>
                        <Slider {...settings}>
                            {ProductDetails.map((item, index) => {
                                return <Products getData={item} key={index} />;
                            })}
                        </Slider>
                    </div>
                    <div className="similar-products">
                        <h3>Related Products</h3>
                        <Slider {...settings}>
                            {ProductDetails.map((item, index) => {
                                return <Products getData={item} key={index} />;
                            })}
                        </Slider>
                    </div>
                    <div className="similar-products">
                        <h3>Recently Viewed</h3>
                        <Slider {...settings}>
                            {ProductDetails.map((item, index) => {
                                return <Products getData={item} key={index} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="details-block" id="faqs" ref={faqRef}>
                    <Accordion />
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
