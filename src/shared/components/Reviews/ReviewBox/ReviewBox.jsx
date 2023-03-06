import React, { useState } from "react";

import Slider from "react-slick";

import SliderImg1 from "@/shared/assets/images/slider-img1.png";
import SliderImg2 from "@/shared/assets/images/slider-img2.png";
import SliderImg3 from "@/shared/assets/images/slider-img3.png";
import SliderImg4 from "@/shared/assets/images/slider-img4.png";
import SliderImg5 from "@/shared/assets/images/slider-img5.png";
import "./ReviewBox.scss";
import "../RatingImage/RatingImage.scss";

const ReviewBox = (props) => {
    const productRating = props.productRating;
    const [popUp, setPopUp] = useState(false);
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const [flag, setFlag] = useState(false);
    const openPopUp = () => {
        setPopUp(true);
        document.body.classList.toggle("modal-open");
    };
    const closePopUp = () => {
        setPopUp(false);
        document.body.classList.toggle("modal-open");
    };
    const changeLike = () => {
        setLike((prev) => !prev);
        setDislike(false);
    };
    const changeDislike = () => {
        setDislike((prev) => !prev);
        setLike(false);
    };
    const changeFlag = () => {
        setFlag((prev) => !prev);
    };
    const ratingImg = [
        {
            image: SliderImg1.src,
        },
        {
            image: SliderImg2.src,
        },
        {
            image: SliderImg3.src,
        },
        {
            image: SliderImg4.src,
        },
        {
            image: SliderImg5.src,
        },
        {
            image: SliderImg1.src,
        },
        {
            image: SliderImg2.src,
        },
        {
            image: SliderImg3.src,
        },
        {
            image: SliderImg2.src,
        },
        {
            image: SliderImg3.src,
        },
        {
            image: SliderImg4.src,
        },
        {
            image: SliderImg5.src,
        },
    ];
    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        MobileFirst: true,
    };
    return (
        <div className="review-panel">
            <div className="review-rate">
                <div className="rating-section">
                    {[...Array(5)].map((items, index1) => {
                        return (
                            <div
                                key={index1}
                                className={
                                    productRating.rating.rate <= index1
                                        ? "transparent-star"
                                        : "colored-star"
                                }
                            ></div>
                        );
                    })}
                    <span className="rating-count">
                        {productRating.rating.rate}/5
                    </span>
                </div>
                <h5>{productRating.date}</h5>
                {productRating.verifiedPurchase && (
                    <div className="verified">
                        <i className="icon-verify"></i>
                        Verified Purchase
                    </div>
                )}
                <div className="helpful-box">
                    <button className="helpful-btn">Was this Helpful?</button>
                    <div className="likes">
                        <i
                            className={`icon-like ${like ? "like-active" : ""}`}
                            onClick={changeLike}
                        ></i>
                        {productRating.like}
                        <i
                            className={`icon-dislike ${
                                dislike ? "dislike-active" : ""
                            }`}
                            onClick={changeDislike}
                        ></i>
                        {productRating.dislike}
                    </div>
                </div>
            </div>
            <div className="review-post">
                <p>{productRating.reviewPost}</p>
                <div className="detail-list">
                    <div className="car-year">
                        <h4>Car Year, Make and Model:</h4>
                        <h5>{productRating.productDescription}</h5>
                    </div>
                    <div className="detail">
                        <div className="detail-list">
                            <h4>Posted By:</h4>
                            <h5>{productRating.postedBy}</h5>
                        </div>
                        <div className="detail-list">
                            <h4>Purchased on:</h4>
                            <h5>{productRating.purchaseOn}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-images">
                <div className="images-wrap">
                    {productRating.images.map((item, index) => {
                        return (
                            <div className="image" key={index}>
                                <img
                                    src={item.image}
                                    alt="Rating"
                                    onClick={openPopUp}
                                />
                                {index === 2 && (
                                    <div className="slide-wrapper">
                                        <div
                                            className="add-wrap"
                                            onClick={openPopUp}
                                        >
                                            <i className="add-icon"></i>
                                            <h4>3 Images</h4>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className={`pop-up ${popUp && "active"}`}>
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <Slider {...settings}>
                                {ratingImg.map((item, index) => {
                                    return (
                                        <div className="img-wrap" key={index}>
                                            <img
                                                src={item.image}
                                                alt="slider-img"
                                            />
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <button onClick={closePopUp} className="close-btn">
                        <i className="cancel-icon"></i>
                    </button>
                </div>
                <p>
                    How likely are you to recommend Carorbis.com to a friend:10
                </p>
                <div className="flag-button">
                    <button className="button-flag">
                        <i
                            className={`icon-flag ${flag ? "flag-active" : ""}`}
                            onClick={changeFlag}
                        ></i>
                        Flag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;
