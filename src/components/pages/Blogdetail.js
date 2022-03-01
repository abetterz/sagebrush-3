import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/blogdetail/Content";
import {
  useParams
} from "react-router-dom";
import blogpost from '../../data/blog/blogpost.json';

function Blogdetail() {

  let { id } = useParams();
  console.log(id);
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

export default Blogdetail;
