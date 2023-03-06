import React from "react";

import Link from "next/link";

import "./BreadCrumb.scss";

const BreadCrumbSection = (props) => {
    const breadcumData = props.breadcumData;
    return (
        <>
            <div className="breadcrumb-wrap">
                <div className="container">
                    <ul className="breadcrumb-list">
                        {breadcumData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BreadCrumbSection;
