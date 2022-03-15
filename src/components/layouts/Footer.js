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
                      <a href="https://www.facebook.com/SagebrushRebellionPAC/"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://twitter.com/Sagebrush_USA"><i class="fab fa-twitter-square"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://www.instagram.com/sagebrushrebellion/"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/shop" className="btn-solid btn-solid-white">Shop</a>
                    </li>
                    <li class="list-inline-item">
                      <a className="btn-solid btn-solid-white" href="https://www.paypal.com/donate/?hosted_button_id=G3ZQ7QKEYQEKQ">DONATE</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                  <h6 className="text-custom-white">Contact info</h6>
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
                    <li>
                      <Link to="#" className="text-white">
                        {" "}
                        <span>
                          <i className="pe-7s-call" />
                        </span>
                        (+348) 123 456 7890
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright bg-black d-none">
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-lg-3">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/SagebrushRebellionPAC/">
                      <i className="fab fa-facebook-square" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/Sagebrush_USA">
                      <i className="fab fa-twitter-square" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/sagebrushrebellion/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                  </li>
                </ul>
                <div className="payment-logo mb-md-20 d-none">
                  <div className="payemt-icon">
                    <ul className="contact-info list-inline d-flex">
                      <li>
                        <Link to="#" className="text-white mr-2">
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
                            <i className="fas fa-phone-alt" />
                          </span>
                          +1 863 123-4568
                        </Link>
                      </li>
                    </ul>
                    {/* <img src={footerimg} alt="#" /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center medewithlove align-self-center d-flex justify-content-between">
                <span className="text-white">
                  Paid for by Sagebrush Rebellion PAC. Not authorized by any candidate or candidate's committee.
                </span>
              </div>
              <div className="col-lg-3">
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

        <div className="copyright bg-black">
          <div className="container-fluid custom-container">
            <div className="row align-self-center d-flex justify-content-between">
              <div className="col-copyright d-none">
                <div className="payment-logo mb-md-20">
                  <div className="payemt-icon">
                    <ul className="contact-info list-inline d-flex">
                      <li>
                        <Link to="#" className="text-white mr-2">
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
                            <i className="fas fa-phone-alt" />
                          </span>
                          +1 863 123-4568
                        </Link>
                      </li>
                    </ul>
                    {/* <img src={footerimg} alt="#" /> */}
                  </div>
                </div>
              </div>
              <div className="col-copyright text-center medewithlove align-self-center d-flex justify-content-between">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/SagebrushRebellionPAC/">
                      <i className="fab fa-facebook-square" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/Sagebrush_USA">
                      <i className="fab fa-twitter-square" />
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/sagebrushrebellion/">
                      <i className="fab fa-instagram" />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-copyright text-center medewithlove align-self-center d-flex justify-content-between">
                <span className="text-white">
                  Paid for by Sagebrush Rebellion PAC. Not authorized by any candidate or candidate's committee.
                </span>
              </div>
              <div className="col-copyright">
                <div className="copyright-text">
                  <a href="https://secure.anedot.com/bc203042-d230-4dfb-ae3c-e35b60167f94/56f97a5b-f93c-47ce-94df-fd1dd77651d8" className="donate-btn" target="_blank" style={{ marginLeft: "0px", marginBottom: "10px", marginTop: "10px" }}>
                    DONATE TODAY
                  </a>
                </div>
              </div>
              <div className="col-copyright">
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
