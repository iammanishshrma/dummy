import React, { useState } from "react";

import Link from "next/link";

import "./AccountPanel.scss";

const AccountPanel = (props) => {
    const [showPanel, setShowPanel] = useState(false);
    const panelData = props.panelData;
    return (
        <div className="left-panel-wrap">
            <div
                className="open-panel"
                onClick={() => setShowPanel(!showPanel)}
            >
                <button className={showPanel ? "mob-menu active" : "mob-menu"}>
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                    <span className="menu-bar"></span>
                </button>
                <span className="menu-list">
                    {showPanel ? "Close" : "Open"} Menu
                </span>
            </div>
            <div className={showPanel ? "panel-wrap active" : "panel-wrap"}>
                {panelData?.map((item, index) => {
                    return (
                        <div
                            className="box-wrap"
                            key={index}
                            onClick={() => setShowPanel(!showPanel)}
                        >
                            <Link className="panel-box" href={item.link}>
                                <i className={item.className}></i>
                                <div className="name-wrap">
                                    <h2>{item.panelItem}</h2>
                                    <h3>{item.panelType}</h3>
                                </div>
                            </Link>
                        </div>
                    );
                })}
                <div className="logout-wrap">
                    <button className="logout-btn">
                        <i className="icon-logout"></i>
                        <span className="logout-text">Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountPanel;
