import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import LoaderUi from "@/shared/components/LoaderUi/LoaderUi";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "./SearchFilter.scss";

const DropdownValueMake = [
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
];
const DropdownValueModel = [
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
];
const DropdownValueYear = [
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
];
const DropdownValueVariant = [
    { name: "Rome" },
    { name: "London" },
    { name: "Istanbul" },
    { name: "Paris" },
];

const SerchFilter = () => {
    const [loader, setLoader] = useState(false);
    const [selectedDropMake, setSelectedDropMake] = useState();
    const [selectedDropModel, setSelectedDropModel] = useState();
    const [selectedDropYear, setSelectedDropYear] = useState();
    const [selectedDropVariant, setSelectedDropVariant] = useState();

    const onDropChangeMake = (e) => {
        setSelectedDropMake(e.value);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);
    const onDropChangeModel = (e) => {
        setSelectedDropModel(e.value);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };
    const onDropChangeYear = (e) => {
        setSelectedDropYear(e.value);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };
    const onDropChangeVariant = (e) => {
        setSelectedDropVariant(e.value);
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };

    return (
        <>
            {loader ? (
                <div className="loader">
                    <LoaderUi />
                </div>
            ) : null}
            <div className="search-filter">
                <div className="head-wrap">
                    <h2>You Are Looking For?</h2>
                </div>
                <span className="filter-title">
                    shop for you specific vehicle to find parts that fit.
                </span>
                <div className="select-boxes-wrap">
                    <Dropdown
                        value={selectedDropMake}
                        options={DropdownValueMake}
                        onChange={onDropChangeMake}
                        optionLabel="name"
                        placeholder="Select Car Make"
                        appendTo="self"
                        className="car-model-wrapper"
                    />
                    <Dropdown
                        value={selectedDropModel}
                        options={DropdownValueModel}
                        onChange={onDropChangeModel}
                        optionLabel="name"
                        placeholder="Select Car Model"
                        appendTo="self"
                        className="car-model-wrapper"
                    />
                    <Dropdown
                        value={selectedDropYear}
                        options={DropdownValueYear}
                        onChange={onDropChangeYear}
                        optionLabel="name"
                        placeholder="Select Year"
                    />
                    <Dropdown
                        value={selectedDropVariant}
                        options={DropdownValueVariant}
                        onChange={onDropChangeVariant}
                        optionLabel="name"
                        placeholder="Select Car Variant"
                        appendTo="self"
                        className="car-model-wrapper"
                    />
                    <input type="submit" value="search" className="btn" />
                </div>
            </div>
        </>
    );
};
export default SerchFilter;
