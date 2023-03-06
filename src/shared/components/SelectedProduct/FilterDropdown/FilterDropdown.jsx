import React, { useEffect, useRef, useState } from "react";

import "./FilterDropdown.scss";

const FilterDropdown = (props) => {
    const filterData = props.filterData;
    const [data, setData] = useState(filterData[0].name);
    const [initial, setInitial] = useState(false);

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

    const handleClick = (e) => {
        setData(e);
        setInitial(false);
    };
    const closeDropdown = () => {
        setInitial(!initial);
    };
    return (
        <div className="selector-wrapp" ref={ref}>
            <div className="filter-selected" onClick={closeDropdown}>
                <i className="dropdown-icon"></i>
                <span className="selected-value">{data}</span>
            </div>
            {initial && (
                <ul className="menu-wrapper">
                    {filterData?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    data === item.name
                                        ? "active"
                                        : "filter-list"
                                }
                            >
                                <div
                                    className="select-menu"
                                    onClick={() => handleClick(item.name)}
                                >
                                    {item.name}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default FilterDropdown;
