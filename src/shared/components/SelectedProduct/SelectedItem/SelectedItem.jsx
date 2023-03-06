import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ScrollPanel } from "primereact/scrollpanel";

import {
    brandFilter,
    originFilter,
    fitmentFilter,
} from "@/shared/store/slices/FilterDataSlice";

import "./SelectedItem.scss";

const SelectedItem = (props) => {
    const selectedData = props.selectedData;
    const brandState = useSelector(
        (state) => state.FilterDataSlice.brandFilter
    );
    const originState = useSelector(
        (state) => state.FilterDataSlice.originFilter
    );
    const fitmentState = useSelector(
        (state) => state.FilterDataSlice.fitmentFilter
    );
    const dispatch = useDispatch();
    const deleteFilter = (e) => {
        let brandStateCopy = [...brandState];
        let brandStateData = brandStateCopy.filter((event) => event !== e);
        dispatch(brandFilter(brandStateData));

        let originFilterCopy = [...originState];
        let originFilterData = originFilterCopy.filter((event) => event !== e);
        dispatch(originFilter(originFilterData));

        if (e === fitmentState) {
            dispatch(fitmentFilter([]));
        }
    };
    return (
        <>
            {selectedData ? (
                <ScrollPanel className="selected-item-wrap">
                    <ul className="selected-item">
                        {selectedData?.map((items, index) => {
                            return (
                                <li key={index}>
                                    <span className="item-name">{items}</span>
                                    <button onClick={() => deleteFilter(items)}>
                                        <i className="cancel-icon"></i>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </ScrollPanel>
            ) : null}
        </>
    );
};

export default SelectedItem;
