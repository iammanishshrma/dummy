import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ScrollPanel } from "primereact/scrollpanel";

import CustomRadio from "../CustomRadio/CustomRadio";
import { fitmentFilter } from "@/shared/store/slices/FilterDataSlice";
import "../BrandFilter/BrandFilter.scss";
import "./Fitment.scss";

const Fitment = () => {
    const radioData = [
        {
            name: "Universal Fit",
            count: "29",
        },
        {
            name: "Specific Fit",
            count: "10",
        },
        {
            name: "Uni1",
            count: "29",
        },
        {
            name: "Universal Fit1",
            count: "29",
        },
        {
            name: "Specific Fit2",
            count: "10",
        },
        {
            name: "Uni3",
            count: "29",
        },
        {
            name: "Fit4",
            count: "10",
        },
    ];
    const dispatch = useDispatch();
    const onChange = (event) => {
        dispatch(fitmentFilter(event.target.value));
    };
    const clearFitmentFilter = useSelector(
        (state) => state.FilterDataSlice.fitmentFilter
    );
    return (
        <div className="filter-box checkbox-wrap">
            <h4>Fitment</h4>
            <ScrollPanel className="custom">
                {radioData &&
                    radioData.map((items, index) => {
                        return (
                            <CustomRadio
                                items={items}
                                key={index}
                                value={items.name}
                                name={"radio"}
                                onChange={onChange}
                                checked={clearFitmentFilter === items.name}
                            />
                        );
                    })}
            </ScrollPanel>
        </div>
    );
};

export default Fitment;
