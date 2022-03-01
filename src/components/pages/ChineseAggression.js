import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class ChineseAggression extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | Chinese Aggression</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Breadcrumbs breadcrumb={{ pagename: "Chinese Aggression", classname: "chinese-aggression" }} />
                <div className="container">
                    <div className="row my-5">
                        <h3 className="header-title align-center mb-20">
                            Chinese Aggression
                        </h3>
                        <p>
                            The Chinese Communist Party (CCP) is the greatest foreign threat to our country and is quickly moving to become the world's most influential economic and militaristic superpower. The CCP wants to exclude the United States from the Western Pacific and Asia. It has infiltrated key American industries and institutions, especially academia and technology. Our organization seeks to eliminate China's influence on American domestic industry, innovation, research, and reverse the expansion of its power around the globe.
                        </p>
                        <h5 className="w-100 mt-3">
                            Policy Recommendations
                        </h5>
                        <br />
                        <ul className="sagebrush-list">
                            <li>- Penalize U.S. companies from off-shoring their manufacturing to China.</li>
                            <li>- Increase tariffs on all Chinese imports that compete with American domestic industries.</li>
                            <li>- Ban Chinese purchases of U.S. land, including by multinational corporations with ties to the CCP. </li>
                            <li>- Place stricter parameters and penalties on publicly funded research institutions, and individuals within those institutions, pertaining to correspondence and cooperation with individuals and institutions tied to the CCP.</li>
                        </ul>
                    </div>
                </div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default ChineseAggression;
