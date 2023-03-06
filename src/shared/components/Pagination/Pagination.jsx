import React, { useEffect, useState } from "react";

import { Paginator } from "primereact/paginator";

import "./Pagination.scss";
const Pagination = (props) => {
    const [customFirst3, setCustomFirst3] = useState(0);
    const [customRows3, setCustomRows3] = useState(10);
    const [GetLastItems, setLastItems] = useState(0);

    const onCustomPageChange3 = (event) => {
        setCustomFirst3(event.first);
        setCustomRows3(event.rows);
    };
    props.OnPageChange({
        customFirst3,
        GetLastItems,
    });
    const template3 = {
        layout: "PrevPageLink PageLinks NextPageLink CurrentPageReport",
        PrevPageLink: (options) => {
            return (
                <button
                    type="button"
                    className={options.className}
                    onClick={options.onClick}
                    disabled={options.disabled}
                >
                    <span className="p-3">Prev</span>
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button
                    type="button"
                    className={options.className}
                    onClick={options.onClick}
                    disabled={options.disabled}
                >
                    <span className="p-3">Next</span>
                </button>
            );
        },
        CurrentPageReport: (options) => {
            useEffect(() => {
                setLastItems(options.last);
            }, [options]);
            return (
                <span className="pagination-wrap">
                    <div className="page-count">
                        Page {options.currentPage} of {options.totalPages}
                    </div>
                </span>
            );
        },
    };
    return (
        <div className="pagination-main-wrap">
            <Paginator
                template={template3}
                first={customFirst3}
                rows={customRows3}
                totalRecords={props.totalPages}
                onPageChange={onCustomPageChange3}
                className="justify-content-start my-3"
            ></Paginator>
        </div>
    );
};

export default Pagination;
