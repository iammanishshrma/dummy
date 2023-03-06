import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useSelector } from "react-redux";

import imgPlaceholder from "../../assets/images/profile-image.png";

const UserInfo = (props) => {
    const [profileImg, setProfileImg] = useState(imgPlaceholder.src);
    const { name, email, mobile, img, isVerifiedEmail, isVerifiedMobile } =
        useSelector((state) => state.getUserSlice);

    useEffect(() => {
        if (img) {
            setProfileImg(img);
        }
    }, [img]);

    return (
        <div className="account-form-wrap">
            <div className="form-wrap">
                <div className="ltl-form-block">
                    <div className="form-block add-profile">
                        <img src={profileImg} alt="profile-img" />
                    </div>
                    <div className="form-block">
                        <label className="input-label">Full Name</label>
                        <div className="error-field">
                            <input
                                value={name}
                                className="form-control"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="form-block">
                        <label className="input-label">Mobile</label>
                        <div className="error-field">
                            <input
                                value={mobile}
                                className="form-control"
                                disabled
                            />
                            {isVerifiedMobile && (
                                <span className="verified-number">
                                    Verified
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="form-block">
                        <label className="input-label">Email</label>
                        <div className="error-field">
                            <input
                                value={email}
                                className="form-control"
                                disabled
                            />
                            {isVerifiedEmail && (
                                <span className="verified-number">
                                    Verified
                                </span>
                            )}
                        </div>
                    </div>
                    <button className="form-btn" onClick={props.onEditClick}>
                        Edit
                    </button>
                    {/* <Link href="/my-profile/edit" className="form-btn">
                        Edit
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
