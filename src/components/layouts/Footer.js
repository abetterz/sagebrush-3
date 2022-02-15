import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Instagram from "./Instagram";

import logo from "../../assets/img/logo.png";
import footerimg from "../../assets/img/footer-bottom-img.png";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="section-padding bg-light-theme pt-0 u-line bg-custom-primary">
          <Instagram />
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="footer-contact">
                  <h6 className="text-custom-white">About Us</h6>
                  <div className="logo mb-xl-20">
                    <Link to="#">
                      <img src={logo} className="img-fluid" alt="img" />
                    </Link>
                  </div>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-links">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="/"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/"><i class="fab fa-twitter-square"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/shop" className="btn-solid btn-solid-white">Shop</a>
                    </li>
                    <li class="list-inline-item">
                      <a className="btn-solid btn-solid-white" href="/">DONATE</a>
                    </li>
                  </ul>
                  {/* <h6 className="text-custom-white">Get to Know Us</h6>
                  <ul>
                    <li>
                      <Link to="/about" className="text-white fw-500">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-left" className="text-white fw-500">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Socialize
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-white fw-500">
                        Ecom
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Perks
                      </Link>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Let Us Help You</h6>
                  <ul>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Account Details
                      </Link>
                    </li>
                    <li>
                      <Link to="/order-details" className="text-white fw-500">
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Find Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="text-white fw-500">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Track order
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Get to Know Us</h6>
                  <ul>
                    <li>
                      <Link to="/about" className="text-white fw-500">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="text-white fw-500">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Socialize
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-white fw-500">
                        Ecom
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white fw-500">
                        Perks
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Contact info</h6>
                  <ul className="contact-info">
                    {/* <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-timer" />
                        </span>
                        Monday - Friday: 9:00 AM - 06:00 PM
                      </Link>
                    </li> */}
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-mail" />
                        </span>
                        info@sagebrush.com
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-call" />
                        </span>
                        (+348) 123 456 7890
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-map-marker" />
                        </span>
                        (+348) 123 456 7890
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright bg-black">
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-lg-4">
                <div className="payment-logo mb-md-20">
                  <div className="payemt-icon">
                    <ul className="contact-info">
                      <li>
                        <Link to="#" className="text-white">
                          {" "}
                          <span>
                            <i className="pe-7s-mail" />
                          </span>
                          info@sagebrush.com
                        </Link>
                      </li>
                    </ul>
                    {/* <img src={footerimg} alt="#" /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center medewithlove align-self-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-facebook-square" />
                    </Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-twitter-square" />
                    </Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>{" "}
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-youtube" />
                    </Link>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="copyright-text">
                  {" "}
                  <span className="text-white">
                    ©{" "}
                    <Link to="#" className="text-white">
                      Sagebrush Rebellion
                    </Link>{" "}
                    - 2022 | All Right Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment >
    );
  }
}

export default Footer;
