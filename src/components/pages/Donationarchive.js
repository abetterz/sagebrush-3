import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/donationarchive/Content";

class Donationarchive extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Donation Grid</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Donation Grid" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Donationarchive;
