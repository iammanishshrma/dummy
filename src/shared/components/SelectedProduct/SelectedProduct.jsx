import React from "react";

import { useSelector, useDispatch } from "react-redux";

import FilterDropdown from "./FilterDropdown/FilterDropdown";
import SelectedItem from "./SelectedItem/SelectedItem";
import {
    brandFilter,
    clearFilter,
    originFilter,
    fitmentFilter,
} from "@/shared/store/slices/FilterDataSlice";
import "./SelectedProduct.scss";

const SelectedProduct = () => {
    const filterData = [
        {
            name: "Relevance",
        },
        {
            name: "top rated",
        },
        {
            name: "price : low to high",
        },
    ];
    const dispatch = useDispatch();
    const filterPills = useSelector((state) => state.FilterDataSlice.allFilter);
    const clearFilterData = () => {
        dispatch(clearFilter([]));
        dispatch(brandFilter([]));
        dispatch(originFilter([]));
        dispatch(fitmentFilter([]));
    };
    console.log(filterPills);
    return (
        <div className="selected-product">
            <div className="lft-filter">
                {filterPills?.length == 0 || filterPills == undefined ? null : (
                    <div className="clear-wrapper" onClick={clearFilterData}>
                        <i className="icon-clear"></i>
                        <button className="clear-all">Clear All</button>
                    </div>
                )}
                <SelectedItem selectedData={filterPills} />
            </div>
            <FilterDropdown filterData={filterData} />
        </div>
    );
};

export default SelectedProduct;
