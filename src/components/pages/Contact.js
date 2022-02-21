import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/contact/Content";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Contact Us</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Breadcrumbs breadcrumb={{ pagename: "Contact Us" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Contact;
