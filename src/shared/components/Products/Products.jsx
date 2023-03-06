import React from "react";

import Link from "next/link";

import "./Products.scss";

const Products = (props) => {
    return (
        <>
            <div className="product-wrap">
                <div className="product-image">
                    {props.getData.Recomended ? (
                        <span className="recomended">
                            {props.getData.Recomended}
                        </span>
                    ) : null}
                    {props.getData.TopRated ? (
                        <span className="top-rated">
                            {props.getData.TopRated}
                        </span>
                    ) : null}

                    <Link href="/product-details">
                        <img src={props.getData.ImageLink} alt="product" />
                    </Link>
                </div>
                <div className="product-content">
                    <span className="brand-name">
                        {props.getData.BrandName}
                    </span>
                    <p className="product-name">{props.getData.ProductName}</p>
                    <div className="rating-section">
                        {[...Array(5)].map((items, index1) => {
                            return (
                                <div
                                    key={index1}
                                    className={
                                        props.getData.rating.rate <= index1
                                            ? "transparent-star"
                                            : "colored-star"
                                    }
                                ></div>
                            );
                        })}
                        <span className="rating-count">
                            ({props.getData.ratingCount})
                        </span>
                    </div>
                    <div className="product-discount">
                        <div className="price-wrap">
                            <span className="actual-price">
                                <span className="rupee-symbol">
                                    <img
                                        src={props.getData.DiscountRupees}
                                        alt="rupee-icon"
                                    />
                                </span>
                                {props.getData.DiscountPrice}
                            </span>
                            <span className="discount-price">
                                <span className="rupee-symbol">
                                    <img
                                        src={props.getData.ActualRupees}
                                        alt="rupee-icon"
                                    />
                                </span>
                                {props.getData.ActualPrice}
                            </span>
                        </div>
                        <span className="discount-off">
                            {props.getData.OfferPercent}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
