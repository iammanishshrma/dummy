import React, { useState, useEffect } from "react";

import RatingImage from "./RatingImage/RatingImage";
import TotalRating from "./TotalRating/TotalRating";
import ReviewBox from "./ReviewBox/ReviewBox";
import SliderImg1 from "@/shared/assets/images/slider-img1.png";
import SliderImg2 from "@/shared/assets/images/slider-img2.png";
import SliderImg3 from "@/shared/assets/images/slider-img3.png";
import FilterDropdown from "../SelectedProduct/FilterDropdown/FilterDropdown";
import Pagination from "../Pagination/Pagination";
import "./Reviews.scss";

const Reviews = (props) => {
    const [firstPage, GetfirstPage] = useState(0);
    const [EndPage, GetEndPage] = useState(2);
    const productRating = [
        {
            rating: {
                rate: "4.0",
            },
            verifiedPurchase: true,
            date: "12 July, 2022",
            like: 1,
            dislike: 0,
            reviewPost:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus consequat integer iaculis. Donec sit diam, malesuada nunc, dignissim fames vel dapibus. Congue sagittis id condimentum cras. Leo, sed tortor vel pharetra et at placerat. Nisl, proin eget risus vitae elementum, massa pulvinar a egestas. Nullam ullamcorper id quis eget dictum et urna ullamcorper id. Auctor convallis mattis sit nullam orci proin viverra etiam felis. Augue fringilla ac nec gravida tincidunt. Risus, in elementum orci, commodo. Interdum velit.",
            productDescription: "Tata Punch Pure MT 2022",
            postedBy: "Henry Cavill",
            purchaseOn: "04 July, 2022",
            images: [
                {
                    image: SliderImg1.src,
                },
                {
                    image: SliderImg2.src,
                },
                {
                    image: SliderImg3.src,
                },
            ],
        },
        {
            rating: {
                rate: "4.0",
            },
            verifiedPurchase: true,
            date: "12 July, 2022",
            like: 1,
            dislike: 0,
            reviewPost:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus consequat integer iaculis. Donec sit diam, malesuada nunc, dignissim fames vel dapibus. Congue sagittis id condimentum cras. Leo, sed tortor vel pharetra et at placerat. Nisl, proin eget risus vitae elementum, massa pulvinar a egestas. Nullam ullamcorper id quis eget dictum et urna ullamcorper id. Auctor convallis mattis sit nullam orci proin viverra etiam felis. Augue fringilla ac nec gravida tincidunt. Risus, in elementum orci, commodo. Interdum velit.",
            productDescription: "Tata Punch Pure MT 2022",
            postedBy: "Henry Cavill",
            purchaseOn: "04 July, 2022",
            images: [
                {
                    image: SliderImg1.src,
                },
                {
                    image: SliderImg2.src,
                },
                {
                    image: SliderImg3.src,
                },
            ],
        },
        {
            rating: {
                rate: "4.0",
            },
            verifiedPurchase: true,
            date: "12 July, 2022",
            like: 1,
            dislike: 0,
            reviewPost:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus consequat integer iaculis. Donec sit diam, malesuada nunc, dignissim fames vel dapibus. Congue sagittis id condimentum cras. Leo, sed tortor vel pharetra et at placerat. Nisl, proin eget risus vitae elementum, massa pulvinar a egestas. Nullam ullamcorper id quis eget dictum et urna ullamcorper id. Auctor convallis mattis sit nullam orci proin viverra etiam felis. Augue fringilla ac nec gravida tincidunt. Risus, in elementum orci, commodo. Interdum velit.",
            productDescription: "Tata Punch Pure MT 2022",
            postedBy: "Henry Cavill",
            purchaseOn: "04 July, 2022",
            images: [
                {
                    image: SliderImg1.src,
                },
                {
                    image: SliderImg2.src,
                },
                {
                    image: SliderImg3.src,
                },
            ],
        },
        {
            rating: {
                rate: "4.0",
            },
            verifiedPurchase: true,
            date: "12 July, 2022",
            like: 1,
            dislike: 0,
            reviewPost:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus consequat integer iaculis. Donec sit diam, malesuada nunc, dignissim fames vel dapibus. Congue sagittis id condimentum cras. Leo, sed tortor vel pharetra et at placerat. Nisl, proin eget risus vitae elementum, massa pulvinar a egestas. Nullam ullamcorper id quis eget dictum et urna ullamcorper id. Auctor convallis mattis sit nullam orci proin viverra etiam felis. Augue fringilla ac nec gravida tincidunt. Risus, in elementum orci, commodo. Interdum velit.",
            productDescription: "Tata Punch Pure MT 2022",
            postedBy: "Henry Cavill",
            purchaseOn: "04 July, 2022",
            images: [
                {
                    image: SliderImg1.src,
                },
                {
                    image: SliderImg2.src,
                },
                {
                    image: SliderImg3.src,
                },
            ],
        },
        {
            rating: {
                rate: "4.0",
            },
            verifiedPurchase: true,
            date: "12 July, 2022",
            like: 1,
            dislike: 0,
            reviewPost:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus consequat integer iaculis. Donec sit diam, malesuada nunc, dignissim fames vel dapibus. Congue sagittis id condimentum cras. Leo, sed tortor vel pharetra et at placerat. Nisl, proin eget risus vitae elementum, massa pulvinar a egestas. Nullam ullamcorper id quis eget dictum et urna ullamcorper id. Auctor convallis mattis sit nullam orci proin viverra etiam felis. Augue fringilla ac nec gravida tincidunt. Risus, in elementum orci, commodo. Interdum velit.",
            productDescription: "Tata Punch Pure MT 2022",
            postedBy: "Henry Cavill",
            purchaseOn: "04 July, 2022",
            images: [
                {
                    image: SliderImg1.src,
                },
                {
                    image: SliderImg2.src,
                },
                {
                    image: SliderImg3.src,
                },
            ],
        },
    ];
    const OnPageChange = (data) => {
        useEffect(() => {
            GetfirstPage(data.customFirst3);
            GetEndPage(data.GetLastItems);
        }, [data]);
    };
    const filterData = [
        {
            name: "Newest",
        },
        {
            name: "Oldest",
        },
        {
            name: "top rated",
        },
    ];
    return (
        <>
            <div className="rate-wrap">
                <TotalRating ratingData={props.ratingData} />
                <RatingImage />
            </div>
            <div className="review-select">
                256 reviews
                <FilterDropdown filterData={filterData} />
            </div>
            <div className="review-box-wrap">
                {productRating.slice(firstPage, EndPage).map((item, index) => {
                    return <ReviewBox key={index} productRating={item} />;
                })}
            </div>
            <div className="pagination-wrap">
                <Pagination
                    totalPages={productRating.length}
                    OnPageChange={OnPageChange}
                />
            </div>
        </>
    );
};

export default Reviews;
