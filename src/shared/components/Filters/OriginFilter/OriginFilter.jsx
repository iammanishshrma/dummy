import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ScrollPanel } from "primereact/scrollpanel";

import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { originFilter } from "@/shared/store/slices/FilterDataSlice";
import "../BrandFilter/BrandFilter.scss";
import "./OriginFilter.scss";

const OriginFilter = () => {
    const checkboxData = [
        {
            name: "OEM",
            count: "15",
        },
        {
            name: "OES",
            count: "23",
        },
        {
            name: "After Market",
            count: "09",
        },
        {
            name: "Third Party",
            count: "11",
        },
        {
            name: "OEM1",
            count: "15",
        },
        {
            name: "OES1",
            count: "23",
        },
        {
            name: "OEM2",
            count: "15",
        },
        {
            name: "OES3",
            count: "23",
        },
        {
            name: "After Market4",
            count: "09",
        },
    ];
    const dispatch = useDispatch();
    const [getChecked, setChecked] = useState([]);
    const handleChange = (event) => {
        let oldVal = [...getChecked];
        if (event.target.checked) {
            oldVal = [...getChecked, event.target.value];
        } else {
            oldVal.splice(getChecked.indexOf(event.target.value), 1);
        }
        setChecked(oldVal);
        dispatch(originFilter(oldVal));
    };
    const clearOriginFilter = useSelector(
        (state) => state.FilterDataSlice.originFilter
    );
    useEffect(() => {
        setChecked(clearOriginFilter);
    }, [clearOriginFilter]);
    return (
        <div className="filter-box origin-filter">
            <h4>Origin</h4>
            <ScrollPanel className="custom">
                {checkboxData &&
                    checkboxData.map((items, index) => {
                        return (
                            <CustomCheckbox
                                items={items}
                                key={index}
                                handleChange={handleChange}
                                checked={clearOriginFilter.includes(items.name)}
                            />
                        );
                    })}
            </ScrollPanel>
        </div>
    );
};
export default OriginFilter;
