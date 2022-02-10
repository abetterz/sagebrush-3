import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/shopleft/Content";

class Shopleft extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sage Brush | Shop</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Shop" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Shopleft;
