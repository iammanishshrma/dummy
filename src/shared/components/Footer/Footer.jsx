import React from "react";
import Link from "next/link";

import loadable from "@loadable/component";
const ScrollTopLoadable = loadable(() => import("../ScrollToTop/ScrollToTop"));
import FooterLogo from "@/shared/assets/images/footer-logo.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="menu-wrapper">
                    <div className="footer-list">
                        <h5>Sell With Us</h5>
                        <ul>
                            <li>
                                <Link href="/" className="nav-link">
                                    Become Vendor
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Sell on Carorbis
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Seller Eligibility
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Seller Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5>Useful Links</h5>
                        <ul>
                            <li>
                                <Link href="/" className="nav-link">
                                    Payment Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Security Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Authenticity & Quality
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Return & Refund Policy{" "}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="nav-link">
                                    Exchange Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5>Get To Know US</h5>
                        <ul>
                            <li>
                                <Link href="/our-story" className="nav-link">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/career" className="nav-link">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5>Get In Touch</h5>
                        <ul>
                            <li>
                                <Link href="/contact" className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/seller-support"
                                    className="nav-link"
                                >
                                    Seller Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/help-support" className="nav-link">
                                    Help Centre
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="nav-link">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/report-issue" className="nav-link">
                                    Report an Issue
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h5>Newsletter</h5>
                        <p>
                            To stay up to date on our promotion, discounts,
                            sales, special offers & more We won’t spam you.
                            Promise!
                        </p>
                        <div className="email-wrap">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your emaill Address"
                            />
                            <button type="submit" className="btn-submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="sub-content">
                        <Link href="/" className="footer-logo">
                            <img src={FooterLogo.src} alt="footer-logo" />
                        </Link>
                        <div className="social-content">
                            <h5>Follow Us On</h5>
                            <ul className="social-wrapper">
                                <li>
                                    <Link href="/">
                                        <i className="icon-fb social-icon"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <i className="icon-twitter social-icon"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <i className="icon-linkedin social-icon"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <i className="icon-insta social-icon"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="policy-wrapper">
                        <span className="copyright">
                            Copyright © {new Date().getFullYear()} carorbis. All
                            rights reserved.
                        </span>
                        <ul>
                            <li>
                                <Link
                                    href="/term-condition"
                                    className="nav-link"
                                >
                                    Terms Of Use
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="nav-link"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                        <span className="statement">
                            Accessibility Statement
                        </span>
                    </div>
                </div>
            </div>
            <ScrollTopLoadable />
        </section>
    );
};

export default Footer;
