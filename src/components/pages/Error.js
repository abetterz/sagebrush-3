import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

class Error extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Error 404</title>
          <meta name="description" content="#" />
        </MetaTags>
        <div className="page-404 loader" id="page-404">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="404-img">
                    <h1 className="text-404">
                      4<span className="text-white">0</span>4
                    </h1>
                  </div>
                  <div className="caption white-block">
                    <h5 className="text-custom-white rubik full-width">
                      Opps! Page Not Found.{" "}
                      <Link to="#" className="text-custom-white">
                        Try Again
                      </Link>
                    </h5>
                    <Link to="/" className="btn btn-text mt-20">
                      Go Back Home{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Error;
