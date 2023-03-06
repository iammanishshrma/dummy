import React from "react";

import Products from "../Products/Products";
import ProductImage1 from "@/shared/assets/images/product-1.png";
import ProductImage2 from "@/shared/assets/images/product-2.png";
import ProductImage3 from "@/shared/assets/images/product-3.png";
import ProductImage4 from "@/shared/assets/images/product-4.png";
import ProductImage5 from "@/shared/assets/images/product-5.png";
import DiscountRupee from "@/shared/assets/images/grey-rupee.svg";
import ActualRupee from "@/shared/assets/images/rupee.svg";
import "./TopRatedProduct.scss";

const TopRatedProduct = () => {
    const ProductDetails = [
        {
            ImageLink: ProductImage1.src,
            Recomended: "Recommended",
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
            Recomended: "Recommended",
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
            Recomended: "",
            TopRated: "Top Rated",
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
    ];
    return (
        <>
            <h3>Top Rated Product</h3>
            <div className="bestseller-product">
                {ProductDetails.map((data, index) => {
                    return <Products getData={data} key={index} />;
                })}
            </div>
        </>
    );
};

export default TopRatedProduct;
