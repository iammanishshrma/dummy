import React, { useState } from "react";

import { Slider } from "primereact/slider";

import "./RangeSlider.scss";
const RangeSlider = () => {
    const [value5, setValue5] = useState([0, 100]);
    return (
        <div className="filter-box">
            <h4>Budget</h4>
            <div className="range">
                <div className="range-wrapper">
                    <span className="range-value">&#8377; {value5[0]}</span>
                    <span className="range-value">&#8377; {value5[1]}</span>
                </div>
                <Slider
                    value={value5}
                    onChange={(e) => setValue5(e.value)}
                    range
                />
                <div className="range-type">
                    <span className="price">Minimum Price</span>
                    <span className="price">Maximum Price</span>
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;
