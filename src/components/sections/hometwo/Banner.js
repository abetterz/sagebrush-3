import React, { Component } from "react";
import { Link } from "react-router-dom";

import video from "../../../assets/img/video-bg.mp4";
import bannerLogo from "../../../assets/img/banner_logo.png";

class Banner extends Component {
  render() {
    const bannerLogoStyle = {

    };
    return (
      <section className=" p-relative">
        <div className="container-fluid no-padding">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="main-banner video-banner">
                <video
                  autoPlay="autoplay"
                  loop="loop"
                  playsInline="playsinline"
                  muted="muted"
                >
                  <source src={video} type="video/mp4" />
                </video>
                <div className="overlay overlay-bg-dark-2" />
              </div>
              <div className="transform-center z-index">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 align-self-center">
                      <div className="right-side-content text-center">
                        <img src={bannerLogo} style={bannerLogoStyle} className="image-fit mb-5" alt="square-logo" />
                        <p className="text-white fw-400">
                          Challenging modern day politics to restore our great nation's values and pioneering spirit.
                        </p>
                        <p className="text-white fw-400">
                          Join us in making a difference.
                        </p>
                        <Link
                          to="/shop-left"
                          className="btn-solid with-line btn-big mt-20" style={{ display: "none" }}
                        >
                          <span>
                            Shop Now <i className="fas fa-caret-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Banner;
