import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/storyarchive/Content";

class Storyarchive extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Story Grid</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Breadcrumbs breadcrumb={{ pagename: "Story Grid" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Storyarchive;
