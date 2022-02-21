import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class AgricultureAndFoodSecurity extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | Agriculture And Food Security</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Breadcrumbs breadcrumb={{ pagename: "Agriculture And Food Security", classname: "agriculture-food-security" }} />
                <div className="container">
                    <div className="row my-5">
                        <h3 className="header-title align-center mb-20">
                            Agriculture And Food Security
                        </h3>
                        <p>
                            Conglomerates and foreign investors have too much control over America’s food. During the
                            height of the 2020 Covid-19 economic shutdown, many big food processors sent home their
                            employees, preventing ranchers from getting their products to stores. Had ranchers been given
                            local options to process their meat and produce, many local meat packing plants and
                            processors could have enabled ranchers and farmers to keep grocery store shelves full and to
                            make a living themselves. Our organization will seek to implement policy changes that will allow
                            food to be locally processed and locally sold in order to help ranchers and farmers and secure
                            the food supply
                        </p>
                        <h5 className="w-100 mt-3">
                            Policy Proposals
                        </h5>
                        <br />
                        <ul className="sagebrush-list">
                            <li>- Implement a nationwide Food Freedom Act</li>
                            <li>- Increase domestic market competition for local producers, processors, and consumers</li>
                            <li>- Enforce antitrust laws against oligopolies on meat and produce packing</li>
                            <li>- Improve and enforce existing US code defining unlawful practices established under the
                                Packers and Stockyards Act (1921)</li>
                            <li>- Require country-of-origin labeling on all imported meats, including foreign meats
                                processed in the United States
                            </li>
                            <li>- Pass the PRIME Act as it was introduced into the 116th Congress of the United States</li>
                        </ul>
                    </div>
                </div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default AgricultureAndFoodSecurity;
