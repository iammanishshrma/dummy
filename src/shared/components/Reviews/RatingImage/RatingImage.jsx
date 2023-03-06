import React, { useState } from "react";

import Slider from "react-slick";

import SliderImg1 from "@/shared/assets/images/slider-img1.png";
import SliderImg2 from "@/shared/assets/images/slider-img2.png";
import SliderImg3 from "@/shared/assets/images/slider-img3.png";
import SliderImg4 from "@/shared/assets/images/slider-img4.png";
import SliderImg5 from "@/shared/assets/images/slider-img5.png";
import "./RatingImage.scss";

const AboutProduct = () => {
    const [popUp, setPopUp] = useState(false);
    const openPopUp = () => {
        setPopUp(true);
        document.body.classList.toggle("modal-open");
    };
    const closePopUp = () => {
        setPopUp(false);
        document.body.classList.toggle("modal-open");
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
        slidesToShow: 4,
        slidesToScroll: 1,
        MobileFirst: true,
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

    var settings1 = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        MobileFirst: true,
    };
    return (
        <div className="rating-product">
            <h4>Reviews With Images</h4>
            <div className="slide-img">
                <Slider {...settings}>
                    {ratingImg.map((item, index) => {
                        return (
                            <div className="img-wrap" key={index}>
                                <img
                                    src={item.image}
                                    alt="slider-img"
                                    onClick={openPopUp}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className={`pop-up ${popUp && "active"}`}>
                <div className="popup-wrapper">
                    <div className="popup-content review-img-popup">
                        <Slider {...settings1}>
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
        </div>
    );
};

export default AboutProduct;
