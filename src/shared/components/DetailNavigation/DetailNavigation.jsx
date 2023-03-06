import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DetailProduct from "../DetailProduct/DetailProduct";
import Features from "../Features/Features";
import Warranty from "../Warranty/Warranty";
import "./DetailNavigation.scss";

const DetailNavigation = (props) => {
    const faqRef = props.faqRef;
    const reviewsRef = props.reviewsRef;

    return (
        <ul className="navigation-block">
            <div className="product-detail-tabbing">
                <Tabs>
                    <TabList>
                        <Tab className="tabbing-link">Product Details</Tab>
                        <Tab className="tabbing-link">Features</Tab>
                        <Tab className="tabbing-link">Warranty</Tab>
                        <li className="tabbing-link ">
                            <span
                                onClick={() =>
                                    reviewsRef.current.scrollIntoView()
                                }
                            >
                                review
                            </span>
                        </li>
                        <li className="tabbing-link ">
                            <span
                                onClick={() => faqRef.current.scrollIntoView()}
                            >
                                FAQ
                            </span>
                        </li>
                        {/* <Tab disabled className="tabbing-link"><span onClick={() => reviewsRef.current.scrollIntoView()}>review</span></Tab>
            <Tab disabled className="tabbing-link"><span onClick={() => faqRef.current.scrollIntoView()}>FAQ</span></Tab> */}
                    </TabList>
                    <TabPanel>
                        <DetailProduct />
                    </TabPanel>
                    <TabPanel>
                        <Features />
                    </TabPanel>
                    <TabPanel>
                        <Warranty />
                    </TabPanel>
                </Tabs>
            </div>
            {/* {navList.map((item, index) => {
        return (
          <li key={index} onClick={() => setactiveTab(`#${item.id}`)}>
            <a
              href={`#${item.id}`}
              className={
                activeTab === `#${item.id}` ? "active" : "tabbing-link"
              }
            >
              {item.name}
            </a>
          </li>
        );
      })} */}
        </ul>
    );
};

export default DetailNavigation;
