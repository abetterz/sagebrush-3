import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class PromotingAmericanEnergy extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | American Energy</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Breadcrumbs breadcrumb={{ pagename: "American Energy", classname: "american-energy" }} />
                <div className="container">
                    <div className="row my-5">
                        <h3 className="header-title align-center mb-20">
                            We need to make energy cheaper.
                        </h3>
                        <p>
                            Virtually all economic activity depends on energy. Plentiful and inexpensive energy enables
                            American businesses to provide food, transportation, housing, recreation, and other goods and
                            services that improve our quality of life. American innovation has made us the world’s largest
                            producer of oil, natural gas, and nuclear energy. This powers the American economy and middle
                            class and helps secure our nation from foreign coercion. <br></br>
                            <br></br>
                            However, federal policies and regulations have increasingly dictated the way American energy is
                            produced, distributed, and how the industry competes on the global stage, much of which hasn’t
                            been in favor of the American energy producers and consumers. Today, politicians in
                            Washington are threatening the American energy sector and the jobs it supplies through radical
                            green energy dictates that will place a heavy burden on consumers. Climate change alarmists
                            have perverted and misrepresented science to raise costs and control the economy.<br></br>
                            <br></br>
                            America’s domestic energy potential needs to be fully unleashed and we need to reclaim our
                            status as an energy independent nation. It makes no economic or scientific sense to abandon
                            fossil fuels and clean energy resources we have in abundance to be held hostage importing
                            foreign sources of energy.<br></br>
                        </p>
                        <h5 className="w-100 mt-3">
                            Policy Recommendations
                        </h5>
                        <br />
                        <ul className="sagebrush-list">
                            <li>- Make America energy independent from foreign oil and natural gas by repealing the
                                Biden moratorium that halts drilling on federal lands and waters.</li>
                            <li>- End the political war on companies and investors who finance oil and gas exploration and
                                production.</li>
                            <li>- Reinstate federal contracts for the construction of the Keystone XL Pipeline project. </li>
                            <li>- Reverse oil production bans in the Arctic Wildlife Refuge & Naval Petroleum ReserveAlaska. </li>
                            <li>- Allow for American mining operations to mine domestically for key alternative energy
                                resources, such as lithium and nickel, and end overseas purchasing of said energy
                                resources from overseas.  </li>
                            <li>- Immediately re-withdraw from the Paris Climate Accord agreement. </li>
                            <li>- Stop apologizing for American economic power and urge our European allies and
                                strategic global partners to follow America’s example of using energy efficiently and
                                cleanly without relying on energy from OPEC and adversarial regimes in the likes of
                                China, Russia, Iran, and Venezuela. </li>
                        </ul>
                    </div>
                </div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default PromotingAmericanEnergy;
