import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "./SliderContent.scss";
import SliderImg1 from "@/shared/assets/images/slider-img1.png";
import SliderImg2 from "@/shared/assets/images/slider-img2.png";
import SliderImg3 from "@/shared/assets/images/slider-img3.png";
import SliderImg4 from "@/shared/assets/images/slider-img4.png";
import SliderImg5 from "@/shared/assets/images/slider-img5.png";

const SliderContent = (props) => {
    const item = props.productDetail;
    const [sliderActive, setSliderActive] = useState(false);
    const [color, setColor] = useState("red");
    let units = Number(item.unit);
    const [qty, setQty] = useState(1);
    const [initial, setInitial] = useState(false);
    const addQty = (e) => {
        setQty(e);
        setInitial(false);
    };
    const handleDropdown = () => {
        setInitial(!initial);
    };
    // close dropdown on outside click
    const ref = useRef();
    useEffect(() => {
        const checkIfClickOutSide = (e) => {
            if (!ref.current.contains(e.target)) {
                setInitial(false);
            }
        };
        // Add clicked event
        document.addEventListener("click", checkIfClickOutSide);
        return () => {
            document.removeEventListener("click", checkIfClickOutSide);
        };
    }, [initial]);

    const handleSlider = () => {
        setSliderActive(!sliderActive);
    };
    const slideItems = [
        { name: "Skoda" },
        { name: "VW" },
        { name: "Audi" },
        { name: "Mercedes", image: SliderImg4.src },
        { name: "Skoda" },
        { name: "VW" },
        { name: "Audi" },
        { name: "Mercedes" },
    ];
    const slideItems2 = [
        { name: "Fabia" },
        { name: "octavia" },
        { name: "Rapid" },
        { name: "kodiaq" },
        { name: "kushaq" },
        { name: "Fabia" },
        { name: "octavia" },
        { name: "Rapid" },
        { name: "kodiaq" },
        { name: "kushaq" },
    ];
    const slideItems3 = [
        { name: "2012-2015" },
        { name: "2012-2015" },
        { name: "2012-2015" },
        { name: "2012-2015" },
    ];
    const slideItems4 = [{ name: "2.0L TDI" }, { name: "1.8L TSI" }];
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    var settings2 = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        MobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div className="desc-wrap">
            <div className="slider-rgt">
                <div className="desc-detail">
                    <h2>
                        <Link href="/">{item.productName}</Link>
                    </h2>
                    <h3>
                        <Link href="/">{item.brand}</Link>
                    </h3>
                    <div className="rating-column">
                        {[...Array(5)].map((items, index1) => {
                            return (
                                <div
                                    key={index1}
                                    className={
                                        item.rating.rate <= index1
                                            ? "transparent-star"
                                            : "colored-star"
                                    }
                                ></div>
                            );
                        })}
                        <a href="#reviews" className="rating-count">
                            ({item.ratingCount} Reviews)
                        </a>
                    </div>
                    <div className="price-wrap">
                        <div className="updated-price">
                            <span className="actual-price">
                                <s className="cut-price">
                                    &#8377;{item.actualPrice}
                                </s>
                            </span>
                            <span className="discount-price">
                                &#8377;{item.DiscountPrice}
                            </span>
                        </div>
                        <div className="discount-rgt">
                            <span className="discount-percent">
                                ({item.discount} Off)
                            </span>
                            <span className="discount-desc">
                                Inclusive of all taxes
                            </span>
                        </div>
                    </div>
                    <div className="stock-wrap">
                        In Stock
                        <span className="stock-unit">
                            ({item.unit} Units left)
                        </span>
                    </div>
                </div>
                <div className="desc-detail">
                    <div className="fit-wrap">
                        <div className="compatiblity-wrap">
                            <h3>Compatibility</h3>
                            <div className="universal-fit">
                                <i className="fit-icon"></i>
                                <div className="add-item">
                                    <h4>Universal Fit</h4>
                                    <p>Work with all vechiles</p>
                                </div>
                            </div>

                            {/* These divs causing hydration failure */}
                            {/* <div> cannot be a child of <p> */}
                            <div className="fit-head-wrap">
                                <p>
                                    <span className="green-circle">
                                        <span className="tick-mark"></span>
                                    </span>
                                    Fits 2019 skoda octavia 1.8 petrol
                                </p>
                                <Link href="/" className="change-vechile">
                                    Change Vechile
                                </Link>
                            </div>
                            <div className="fit-head-wrap not-found-header">
                                <p>
                                    <span className="green-circle red-circle">
                                        <span className="cross"></span>
                                    </span>
                                    Does NOT Fit 2019 Honda City
                                </p>
                                <Link href="/" className="change-vechile">
                                    Change Vechile
                                </Link>
                            </div>

                            <button
                                onClick={handleSlider}
                                className="check-fitment"
                            >
                                Check fit with all vehicles{" "}
                                <i
                                    className={`icon-arrow ${
                                        sliderActive ? "active" : ""
                                    }`}
                                ></i>
                            </button>
                            <div
                                className={`all-sliders ${
                                    sliderActive ? "active" : ""
                                }`}
                            >
                                <div className="slider-one first-slider">
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            {slideItems.map((slide, index) => (
                                                <div key={slide.id}>
                                                    <label
                                                        htmlFor={`1option${index}`}
                                                        className="radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            id={`1option${index}`}
                                                            name="options1"
                                                            value={`option${index}`}
                                                        />
                                                        <span className="radio-button-text">
                                                            <h5>
                                                                {slide.name}
                                                            </h5>
                                                        </span>
                                                    </label>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="slider-one">
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            {slideItems2.map((slide, index) => (
                                                <div key={slide.id}>
                                                    <label
                                                        htmlFor={`2option${index}`}
                                                        className="radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            id={`2option${index}`}
                                                            name="options2"
                                                            value={`option${index}`}
                                                        />
                                                        <span className="radio-button-text">
                                                            <h5>
                                                                {slide.name}
                                                            </h5>
                                                        </span>
                                                    </label>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="slider-one">
                                    <div className="slider-container">
                                        <Slider {...settings2}>
                                            {slideItems3.map((slide, index) => (
                                                <div key={slide.id}>
                                                    <label
                                                        htmlFor={`3option${index}`}
                                                        className="radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            id={`3option${index}`}
                                                            name="options3"
                                                            value={`option${index}`}
                                                        />
                                                        <span className="radio-button-text">
                                                            <h5>
                                                                {slide.name}
                                                            </h5>
                                                        </span>
                                                    </label>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="slider-one">
                                    <div className="slider-container">
                                        <Slider {...settings2}>
                                            {slideItems4.map((slide, index) => (
                                                <div key={slide.id}>
                                                    <label
                                                        htmlFor={`4option${index}`}
                                                        className="radio-button"
                                                    >
                                                        <input
                                                            type="radio"
                                                            id={`4option${index}`}
                                                            name="options4"
                                                            value={`option${index}`}
                                                        />
                                                        <span className="radio-button-text">
                                                            <h5>
                                                                {slide.name}
                                                            </h5>
                                                        </span>
                                                    </label>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wishlist">
                            <div className="qty-wrap" ref={ref}>
                                <span className="qty-desc">Qty:</span>
                                <div
                                    className="qty-dropdown"
                                    onClick={handleDropdown}
                                >
                                    <span className="qty-label">{qty}</span>
                                    <i className="down-arrow"></i>
                                    <div className="dropdown-listing">
                                        {initial && (
                                            <ul>
                                                {[...Array(units)].map(
                                                    (items, index) => {
                                                        return (
                                                            <li
                                                                onClick={() =>
                                                                    addQty(
                                                                        index +
                                                                            1
                                                                    )
                                                                }
                                                                key={index}
                                                            >
                                                                {index + 1}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button className="wishlist-wrap">
                                <i className="wish-icon"></i>
                                <span className="add-wishlist">
                                    Add To Wishlist
                                </span>
                            </button>
                        </div>
                        <button className="add-cart">Add to Cart</button>
                        <Link href="/app/my-cart" className="buy-now">
                            Buy Now
                        </Link>
                        <div className="product-varient">
                            <div className="color-wrap">
                                <span className="color-head">color:</span>
                                <span className="color-value">{color}</span>
                            </div>
                            <div className="item-wrap">
                                <div className="radio-wrapper">
                                    <input
                                        type="radio"
                                        name="addres-type"
                                        onClick={() => setColor("red")}
                                    />
                                    <span className="custom-radio"></span>
                                </div>
                                <div className="radio-wrapper">
                                    <input
                                        type="radio"
                                        name="addres-type"
                                        onClick={() => setColor("yellow")}
                                    />
                                    <span className="custom-radio yellow"></span>
                                </div>
                                <div className="radio-wrapper">
                                    <input
                                        type="radio"
                                        name="addres-type"
                                        onClick={() => setColor("orange")}
                                    />
                                    <span className="custom-radio orange"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desc-detail">
                    <div className="address-wrap">
                        <span className="deliver-desc">Deliver to:</span>
                        <div className="form-block">
                            <input
                                type="text"
                                placeholder="Enter Pincode here"
                                className="form-control"
                            />
                            <button className="check-btn">Check</button>
                        </div>
                    </div>
                    <div className="delivery-date">
                        <span className="date-wrap">
                            Get it by <span className="date">{item.date}</span>
                        </span>
                    </div>
                    <div className="product-available">
                        <i className="return-icon"></i>
                        <span className="return-days">
                            10 Days return Available
                        </span>
                    </div>
                    <div className="product-available">
                        <i className="pay-icon"></i>
                        <span className="return-days">
                            Pay on delivery available
                        </span>
                    </div>
                </div>
                <div className="desc-detail">
                    <div className="sold-wrap">
                        <span className="sold-info">Sold by:</span>
                        <span className="sold-by">{item.soldBy}</span>
                        <Link href="/all-seller" className="more-offer">
                            ({item.offersCount} More Offers)
                        </Link>
                    </div>
                    <div className="sold-wrap">
                        <span className="sold-info">Country of Origin:</span>
                        <span className="sold-by">{item.country}</span>
                    </div>
                    <div className="manufacture-details">
                        <h4>
                            <Link href="/">Manufacturer Details</Link>
                        </h4>
                        <ul className="details-listing">
                            {Object.keys(item.manufactureDetails).map(
                                (items, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="detail-key">
                                                {items}
                                            </div>
                                            <div className="detail-value">
                                                {item.manufactureDetails[items]}
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SliderContent;
