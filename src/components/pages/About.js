import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/about/Content";

class About extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | About Us</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Breadcrumbs breadcrumb={{ pagename: "About Us" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default About;
