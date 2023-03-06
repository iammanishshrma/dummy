import React, { useState } from "react";

import Rating from "react-rating";

import transparent from "@/shared/assets/images/transparent.svg";
import filled from "@/shared/assets/images/yellow-star.svg";

import "./TotalRating.scss";

const TotalRating = (props) => {
    const [GetinputLength, SetinputLength] = useState(0);
    const ratingData = props.ratingData[0];
    const [popUp, setPopUp] = useState(false);
    const openPopUp = () => {
        setPopUp(true);
        document.body.classList.toggle("modal-open");
    };
    const closePopUp = () => {
        setPopUp(false);
        document.body.classList.toggle("modal-open");
    };
    const checkData = (data) => {
        console.log(data);
    };
    let maxLength = 800;
    const getCount = (data) => {
        SetinputLength(data.target.value.length);
        console.log(data.target.value.length);
    };
    return (
        <div className="total-rating">
            <div className="right-main">
                <div className="lft-rating">
                    <div className="star-wrap">
                        <h2>{ratingData.avgRating}</h2>
                        <span className="total-star">out Of 5 Stars</span>
                    </div>
                    <div className="rating-column">
                        {[...Array(5)].map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        Math.floor(ratingData.avgRating) <=
                                        index
                                            ? "transparent-star"
                                            : "colored-star"
                                    }
                                ></div>
                            );
                        })}
                    </div>
                    <div className="global-rating">
                        {ratingData.globalRating}+ global Rating
                    </div>
                    <div className="customer-review">
                        <button className="write-review" onClick={openPopUp}>
                            Write a review
                        </button>
                        <div className={`pop-up ${popUp && "active"}`}>
                            <div className="popup-wrapper">
                                <div className="popup-content">
                                    <h3>Write a review</h3>
                                    <div className="start-rating-wrap">
                                        <div className="rating-column">
                                            <Rating
                                                onChange={(e) => checkData(e)}
                                                emptySymbol={
                                                    <img
                                                        src={transparent.src}
                                                        className="icon-transparent"
                                                    />
                                                }
                                                fullSymbol={
                                                    <img
                                                        src={filled.src}
                                                        className="icon-filled"
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-block">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Product Year"
                                        />
                                    </div>
                                    <div className="form-block">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Product making"
                                        />
                                    </div>
                                    <div className="form-block">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Model name"
                                        />
                                    </div>
                                    <div className="form-block textarea-wrapper">
                                        <textarea
                                            maxLength={maxLength}
                                            rows="5"
                                            onChange={(count) =>
                                                getCount(count)
                                            }
                                            cols="0"
                                            placeholder="Type here"
                                            className="text-area form-control"
                                        ></textarea>
                                        <span className="min-word">
                                            {GetinputLength}/{maxLength} words
                                            maximum
                                        </span>
                                    </div>
                                    <button type="submit" className="form-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <button onClick={closePopUp} className="close-btn">
                                <i className="cancel-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rgt-rating">
                    <ul>
                        {Object.keys(ratingData.ratingPercent)
                            .reverse()
                            .map((item, index1) => {
                                return (
                                    <li key={index1}>
                                        <div className="star-number">
                                            <i className="icon-star"></i>
                                            <div className="star-qty">
                                                {item}
                                            </div>
                                        </div>
                                        <div className="unfilled-box">
                                            <div
                                                className="filled-box"
                                                style={{
                                                    width: `${ratingData.ratingPercent[item]}%`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="rating-percent">
                                            {ratingData.ratingPercent[item]}%
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TotalRating;
