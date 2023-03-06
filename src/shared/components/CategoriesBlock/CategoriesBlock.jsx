import React from "react";

import Link from "next/link";

import "./CategoriesBlock.scss";

const CategoriesBlock = (props) => {
    return (
        <>
            <div className="category-boxes">
                <Link href="/product-listing">
                    <div className="image-wrap">
                        <img src={props.getData.imageLink} alt="category" />
                    </div>
                    <span className="category-title">
                        {props.getData.title}
                    </span>
                </Link>
            </div>
        </>
    );
};

export default CategoriesBlock;
