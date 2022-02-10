import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/hometwo/Content";

class Hometwo extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Homepage</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Hometwo;
