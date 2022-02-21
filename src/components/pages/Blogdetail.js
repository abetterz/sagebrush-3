import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/blogdetail/Content";

class Blogdetail extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Blog Detail</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Breadcrumbs breadcrumb={{ pagename: "Blog Detail" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Blogdetail;
