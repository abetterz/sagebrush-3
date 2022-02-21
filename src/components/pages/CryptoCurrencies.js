import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class CryptoCurrencies extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | Crypto Currencies</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Breadcrumbs breadcrumb={{ pagename: "Crypto Currencies", classname: "crypto-currencies" }} />
                <div className="container">
                    <div className="row my-5">
                        <h3 className="header-title align-center mb-20">
                            Crypto Currencies
                        </h3>
                        <p>
                            Crypto currencies represent a vision for a return to sound money. Since the abandonment of the gold standard and creation of the modern Federal Reserve in 1971, the US economy has suffered at times from inflation, stagflation, wide scale bank failures, manipulated interest rates, and high budget and trade deficits, all of which can be traced in part to weakening of the dollar.
                            A dollar today is worth just about one-fifth of its 1971 ancestor—a hefty stealth tax that afflicts the rich and poor alike. While some cryptos are volatile and still immature, the field offers the potential of a market-based alternative to government currencies. Crypto currencies exist as a free, privatized currency that is not subject to the manipulation of the Federal Reserve, Treasury Department or other agencies. Our policy is to ensure that crypto currencies remain unregulated and under the sole control of the people who develop, invest, and place value in them.
                        </p>
                        <h5 className="w-100 mt-3">
                            Policy Proposals
                        </h5>
                        <br />
                        <ul className="sagebrush-list">
                            <li>- Federally bar the Federal Reserve from introducing its own crypto currency</li>
                            <li>- Provide tax write-offs for all investors who invest money into the development of either crypto currency algorithms, mining operations, exchange technologies, banking institutions, or marketing operations.</li>
                        </ul>
                    </div>
                </div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default CryptoCurrencies;
