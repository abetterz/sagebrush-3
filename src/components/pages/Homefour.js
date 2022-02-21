import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/homefour/Content";

class Homefour extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Homepage</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Homefour;
