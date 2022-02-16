import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class Shopdetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | Shop Details</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: "More Than One Life Changed" }} />
                <div className="container-fluid vh-100"></div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Shopdetail;
