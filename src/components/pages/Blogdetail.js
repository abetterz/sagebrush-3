import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import Content from "../sections/blogdetail/Content";
import { useParams } from "react-router-dom";
import blogPosts from "../../data/blog/blogpost.json";


// console.log(id);
function Blogdetail() {
  let { id } = useParams();
  console.log(id);
  const item = blogPosts.filter((item) => item.id = id);
  console.log(item);
  return (
    <Fragment>
      <MetaTags>
        <title>Sagebrush | {item[0].title}</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Topbar />
      <Breadcrumbs breadcrumb={{ pagename: item[0].title }} />
      <Content blog={item[0]} />
      <Footer />
    </Fragment>
  );
}

export default Blogdetail;
