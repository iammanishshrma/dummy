import React from "react";
import "./AboutServices.scss";
import DeliveryIcon from "@/shared/assets/images/delivery.svg";
import SecureIcon from "@/shared/assets/images/Secure-payment.svg";
import ChatIcon from "@/shared/assets/images/Chat.svg";
import ConfidenceIcon from "@/shared/assets/images/Freindly-Services.svg";
const Services = () => {
    return (
        <>
            <div className="service-wrap">
                <img src={DeliveryIcon.src} alt="delivery-icon" />
                <div className="content-wrap">
                    <h3>Free Delivery</h3>
                    <span className="service-title">
                        On all orders above Rs. 500
                    </span>
                </div>
            </div>
            <div className="service-wrap">
                <img src={SecureIcon.src} alt="secure-icon" />
                <div className="content-wrap">
                    <h3>Safe Payment</h3>
                    <span className="service-title">100% Secure Payments</span>
                </div>
            </div>
            <div className="service-wrap">
                <img src={ChatIcon.src} alt="chat-icon" />
                <div className="content-wrap">
                    <h3>24/7 Help Center</h3>
                    <span className="service-title">
                        Dedicated 24x7 support
                    </span>
                </div>
            </div>
            <div className="service-wrap">
                <img src={ConfidenceIcon.src} alt="service-icon" />
                <div className="content-wrap">
                    <h3>Shop with Confidence</h3>
                    <span className="service-title">30 days return Policy</span>
                </div>
            </div>
        </>
    );
};
export default Services;
