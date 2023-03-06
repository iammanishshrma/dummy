import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import { useSelector } from "react-redux";

import CommentImg from "@/shared/assets/images/comment.svg";
import { axiosInstance } from "@/shared/api/axios";
import { cmsEndPoints } from "@/shared/api/endpoints";
import formatDate from "@/shared/utils/formatDate";
import "./ClientTestimonial.scss";

const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1022,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
const ClientTestimonial = () => {
    const [testimonialList, setTestimonialList] = useState([]);
    const languageId = useSelector((state) => state.languageListSlice.language);

    useEffect(() => {
        if (languageId.length) {
            const payload = {
                languageId,
            };
            axiosInstance
                .post(cmsEndPoints.testimonialList, payload)
                .then((response) => {
                    setTestimonialList(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [languageId]);

    return (
        <>
            <h3>Clients Testimonial</h3>
            <div className="feedback-wrapper">
                <div>
                    {testimonialList.length > 0 && (
                        <Slider {...settings}>
                            {testimonialList.map((testimonial) => (
                                <div key={testimonial._id} className="feeds">
                                    {/* <div className="rating-column">
                {[...Array(5)].map((items, index1) => {
                  return (
                    <div
                      key={index1}
                      className={
                        item.rating.rate <= index1
                          ? "transparent-star"
                          : "colored-star"
                      }
                    >
                    </div>
                  );
                })}
              </div> */}
                                    <div className="testimonial-head">
                                        <h4>
                                            {
                                                testimonial.translationData[0]
                                                    .name
                                            }
                                        </h4>
                                        <span className="date">
                                            {formatDate(testimonial.createdAt)}
                                        </span>
                                    </div>
                                    <div className="feed-description">
                                        <div className="comment-wrapper">
                                            <div className="comment-img">
                                                <img
                                                    src={CommentImg.src}
                                                    alt="commnet-img"
                                                />
                                            </div>
                                            <div className="comment-two">
                                                <img
                                                    src={CommentImg.src}
                                                    alt="commnet-img"
                                                />
                                            </div>
                                        </div>
                                        <p>
                                            {
                                                testimonial.translationData[0]
                                                    .content
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </>
    );
};

export default ClientTestimonial;
