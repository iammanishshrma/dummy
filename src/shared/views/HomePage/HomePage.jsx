import React from "react";
import Banner from "@/shared/components/Banner/Banner";
import Services from "@/shared/components/AboutServices/AboutServices";
import SearchFilter from "@/shared/components/SearchFilter/SearchFilter";
import FeaturedCategory from "@/shared/components/FeaturedCategories/FeaturedCategories";
import DiscountBlocks from "@/shared/components/DiscountBlocks/DiscountBlocks";
import BestSeller from "@/shared/components/BestSellers/BestSellers";
import TopRatedProduct from "@/shared/components/TopRatedProduct/TopRatedProduct";
import DiscountNew from "@/shared/components/DiscountNew/DiscountNew";
import TopBrands from "@/shared/components/TopBrands/TopBrands";
import ClientTestimonial from "@/shared/components/ClientTestimonial/ClientTestimonial";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <>
            <section className="banner">
                <Banner />
            </section>
            <section className="about-services">
                <div className="container">
                    <Services />
                </div>
            </section>
            <section className="search-categories">
                <div className="container">
                    <SearchFilter />
                </div>
            </section>
            <section className="featured-category">
                <div className="container">
                    <FeaturedCategory />
                </div>
            </section>
            <section className="discount-wrap">
                <div className="container">
                    <DiscountBlocks />
                </div>
            </section>
            <section className="bestsellers-wrap">
                <div className="container">
                    <BestSeller />
                </div>
            </section>
            <section className="bestsellers-wrap">
                <div className="container">
                    <TopRatedProduct />
                </div>
            </section>
            <section className="discount-wrap">
                <div className="container">
                    <DiscountNew />
                </div>
            </section>
            <section className="top-brands featured-category">
                <div className="container">
                    <TopBrands />
                </div>
            </section>
            <section className="client-testimonial">
                <div className="container">
                    <ClientTestimonial />
                </div>
            </section>
        </>
    );
};
export default HomePage;

// import React from 'react';

// const HomePage = () => {
//     return <div>HomePage</div>;
// };

// export default HomePage;
