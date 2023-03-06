import React, { useRef, useState, useEffect } from "react";

import Slider from "react-slick";

import Link from "next/link";
// import { SideBySideMagnifier } from "react-image-magnifiers";

// import InnerImageZoom from "react-inner-image-zoom";

// import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./SliderImage.scss";

const SliderImage = (props) => {
    const [nav1, setNav1] = useState(null);
    const [SlideUrl, setSlideUrl] = useState();
    const [largeSlideUrl, setLargeSlideUrl] = useState();
    const [arrayLength, setArrayLength] = useState(5);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const sliderImg = props.sliderImg;
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
        setSlideUrl(sliderImg[0].image);
        setLargeSlideUrl(sliderImg[0].largeImageSrc);
    }, []);
    const settings = {
        slidesToShow: 5,
        //swipeToSlide: true,
        //focusOnSelect: true,
        vertical: true,
        infinite: false,
        arrows: true,
    };
    const handleSlider = (e) => {
        e.stopPropagation();
        setArrayLength(sliderImg.length);
    };
    const getImage = (data) => {
        setSlideUrl(data);
    };
    return (
        <div className="detail-slider">
            <div className="nav-first">
                <div className="img-wrap">
                    {SlideUrl ? (
                        <>
                            <img src={SlideUrl.src} alt="img" />
                            {/* <SideBySideMagnifier
                                imageSrc={SlideUrl}
                                imageAlt="Example"
                                largeImageSrc={largeSlideUrl}
                                className="input-position"
                                st
                                yle={{ order: "0" }}
                                alwaysInPlace={false}
                                overlayOpacity={0.6}
                                switchSides={false}
                                zoomPosition="left"
                                inPlaceMinBreakpoint={641}
                                fillAvailableSpace={false}
                                fillAlignTop={false}
                                fillGapTop={10}
                                fillGapRight={10}
                                fillGapBottom={10}
                                fillGapLeft={0}
                                zoomContainerBorder="1px solid #ccc"
                                zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                            /> */}
                        </>
                    ) : null}
                </div>
                <div className="social-media">
                    <span className="share-product">Share With A Friend:</span>
                    <ul className="share-media">
                        <li>
                            <Link href="/">
                                <i className="icon-fb social-icon"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <i className="icon-twitter social-icon"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <i className="icon-linkedin social-icon"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <i className="icon-insta social-icon"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <i className="icon-share social-icon"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-second">
                <Slider {...settings}>
                    {sliderImg.slice(0, arrayLength).map((item, index) => {
                        return (
                            <div key={index} className="slide-img">
                                <img
                                    src={item.image.src}
                                    alt="slider-img"
                                    onMouseOver={() => getImage(item.image)}
                                />
                                {index === 4 &&
                                    arrayLength === 5 &&
                                    !(sliderImg.length === 5) && (
                                        <div
                                            onClick={handleSlider}
                                            className="slide-wrapper"
                                        >
                                            <div className="add-wrap">
                                                <i className="add-icon"></i>
                                                <h4>
                                                    {sliderImg.length - 4}{" "}
                                                    Images
                                                </h4>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SliderImage;
