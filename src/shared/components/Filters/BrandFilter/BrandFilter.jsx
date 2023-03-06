/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ScrollPanel } from "primereact/scrollpanel";

import { brandFilter } from "@/shared/store/slices/FilterDataSlice";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import "./BrandFilter.scss";

const BrandFilter = () => {
    const checkboxData = [
        {
            name: "Globex",
            count: "15",
        },
        {
            name: "Uno",
            count: "23",
        },
        {
            name: "Minda ",
            count: "09",
        },
        {
            name: "Pioneer",
            count: "11",
        },
        {
            name: "Uno1",
            count: "23",
        },
        {
            name: "Maruti Genuine Spares2",
            count: "23",
        },
        {
            name: "Uno3",
            count: "23",
        },
        {
            name: "Minda4",
            count: "09",
        },
        {
            name: "Uno3",
            count: "23",
        },
        {
            name: "Minda4",
            count: "09",
        },
    ];
    const [getSearchValue, setSearchValue] = useState(checkboxData);
    const clearBrand = useSelector(
        (state) => state.FilterDataSlice.brandFilter
    );
    const searchFilter = (e) => {
        let SortedData = checkboxData.filter((items) => {
            return items.name.toLowerCase().includes(e.target.value);
        });
        setSearchValue(SortedData);
    };
    const dispatch = useDispatch();
    const [checked, setChecked] = useState([]);
    const handleChange = (event) => {
        let oldData = [...checked];
        if (event.target.checked) {
            oldData = [...checked, event.target.value];
        } else {
            oldData.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(oldData);
        dispatch(brandFilter(oldData));
    };
    useEffect(() => {
        setChecked(clearBrand);
    }, [clearBrand]);
    return (
        <div className="filter-box">
            <h4>Brands</h4>
            <div className="form-block">
                <input
                    type="text"
                    placeholder="Enter Brand Name"
                    className="form-control"
                    onChange={searchFilter}
                />
                <button type="submit">
                    <i className="search-icon"></i>
                </button>
            </div>
            {
                <ScrollPanel className="custom">
                    {getSearchValue?.map((items, index) => {
                        return (
                            <CustomCheckbox
                                items={items}
                                key={index}
                                handleChange={handleChange}
                                checked={clearBrand.includes(items.name)}
                            />
                        );
                    })}
                </ScrollPanel>
            }
        </div>
    );
};

export default BrandFilter;
