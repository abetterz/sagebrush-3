import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class AmericanIndustry extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | American Industry</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: "American Industry", classname: "american-industry" }} />
                <div className="container">
                    <div className="row my-5">
                        <h3 className="header-title align-center mb-20">
                            American Industry
                        </h3>
                        <p>
                            Today, America’s national industrial framework is at a greater risk of total collapse than any time in modern history due to a continuous cycle of poor policy decisions here at home. American business innovation and fair trade created enormous wealth and power over the last century.
                            Free trade deals with countries and transnational organizations that didn’t practice free or fair trade, exported much of our manufacturing overseas. Our federal government looked the other way as other governments enacted high tariffs and non-tariff barriers to trade with America, helping their companies steal our intellectual property. Whether it’s America’s once roaring steel mills, oil fields, or construction sites, the United States has significantly fallen behind in
                            production costing our people millions of well paying jobs.
                        </p>
                        <p>
                            Simply put, Americans have lost control over their economic sovereignty. Weak policies have caused our nation's great industrial heritage to become a thing of the past. Our organization believes that it is time for a change in economic/industrial policy in order to safeguard America’s economic sovereignty and to bring about a resurgence of American industrialism.
                        </p>
                        <h5 className="w-100 mt-3">
                            Policy Proposals
                        </h5>
                        <br />
                        <ul className="sagebrush-list">
                            <li>- Reform economic visa programs that allow U.S. corporations to hire foreign workers when Americans possess the skills necessary to perform jobs, even if they cost more. Hire Americans first.</li>
                            <li>- Make America energy independent from foreign oil and natural gas by repealing the Biden moratorium that halts drilling on federal lands and waters</li>
                            <li>- Reinstate federal contracts for the construction of the Keystone XL Pipeline project.</li>
                            <li>- Incentivize privately owned American businesses to develop and launch apprenticeship programs to address the coming employment shortage in skilled labor.</li>
                            <li>- Enact a nationwide Right to Work policy</li>
                            <li>- Strictly enforce U.S. trade laws to prevent the U.S. market from being distorted by dumped and/or subsidized imports that harm domestic industries and workers.</li>
                            <li>- Seek U.S. withdrawal from the World Trade Organization so that U.S. trade is managed by bilateral agreements in which our overwhelming economic power is brought to bear to demand fairness.</li>
                        </ul>
                    </div>
                </div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default AmericanIndustry;
