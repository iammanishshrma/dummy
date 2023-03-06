import React from "react";

import BrandFilter from "../BrandFilter/BrandFilter";
import Fitment from "../Fitment/Fitment";
import OriginFilter from "../OriginFilter/OriginFilter";
import RangeSlider from "../RangeSlider.js/RangeSlider";

const FilterData = () => {
    return (
        <>
            <RangeSlider />
            <BrandFilter />
            <OriginFilter />
            <Fitment />
        </>
    );
};

export default FilterData;
