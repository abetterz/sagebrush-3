import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
// import Content from "../sections/shopdetail/Content";

class LocalLandManagement extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Sagebrush | Local Land Management</title>
                    <meta name="description" content="#" />
                </MetaTags>
                <Topbar />
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: "Local Land Management", classname: "local-land-management" }} />
                <div className="container">
                    <div className="row my-5">
                        <h3 className="header-title align-center mb-20">
                            Local Land Management
                        </h3>
                        <p>
                            Owning land in the United States was once seen as an integral part of the American Dream.
                            Today, Americans may, at best, merely rent “their” land from the government. Current laws and regulations give the federal government the ability to mismanage an overwhelming amount of the interior west and prized coastal communities. Americans are being stripped of their land and its value by the federal government, upending the rights of states governments and citizens that are the basis of our Republic. We are committed to trailblazing a pathway by which states can administer their own land, individuals can fully own their own land, and the federal government is beholden to the state legislatures to access all land beyond the borders of Washington DC.
                        </p>
                        <h5 className="w-100 mt-3">
                            Policy Proposals
                        </h5>
                        <br />
                        <ul className="sagebrush-list">
                            <li>- Decentralize the Bureau of Land management and give all lands within its current jurisdiction to state governments to manage.</li>
                            <li>- Decentralize the Department of the Interior and give all its existing authority to the state legislatures.</li>
                            <li>- Hold the federal government accountable for failing to uphold its agreements with states pertaining to ownership of state lands.</li>
                            <li>- Give states/localities the authority to set the Payment in Lieu of Taxes (PILT) rate according to how the existence of federally owned land affects local revenue.</li>
                            <li>- Strengthen restrictions on foreign purchases and leases of American owned land.</li>
                        </ul>
                    </div>
                </div>
                {/* <Content /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default LocalLandManagement;
