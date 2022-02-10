import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

import banner from "../../assets/img/slider.jpg";
import facebook from "../../assets/img/facebook-logo.svg";
import google from "../../assets/img/google-logo.png";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sagebrush | Register</title>
          <meta name="description" content="#" />
        </MetaTags>
        <div className="inner-wrapper">
          <div className="container-fluid no-padding">
            <div className="row no-gutters overflow-auto">
              <div className="col-md-6">
                <div className="main-banner">
                  <img
                    src={banner}
                    className="img-fluid full-width main-img"
                    alt="banner"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-2 user-page main-padding">
                  <div className="login-sec">
                    <div className="login-box">
                      <form>
                        <h4 className="text-light-black fw-600">
                          Create your account
                        </h4>
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                First name
                              </label>
                              <input
                                type="text"
                                name="#"
                                className="form-control form-control-submit"
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                Last name
                              </label>
                              <input
                                type="text"
                                name="#"
                                className="form-control form-control-submit"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                Email
                              </label>
                              <input
                                type="email"
                                name="#"
                                className="form-control form-control-submit"
                                placeholder="Email I'd"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label className="text-light-white fs-14">
                                Password (8 character minimum)
                              </label>
                              <input
                                type="password"
                                id="password-field"
                                name="#"
                                className="form-control form-control-submit"
                                defaultValue="password"
                                placeholder="Password"
                                required
                              />
                              <div
                                data-name="#password-field"
                                className="fa fa-fw fa-eye field-icon toggle-password"
                              />
                            </div>
                            <div className="form-group checkbox-reset">
                              <label className="custom-checkbox mb-0">
                                <input type="checkbox" name="#" />{" "}
                                <span className="checkmark" /> Keep me signed in
                              </label>
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn-second-2 btn-submit full-width"
                              >
                                Create your account
                              </button>
                            </div>
                            <div className="form-group text-center">
                              {" "}
                              <span>or</span>
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn-second-2 btn-facebook full-width"
                              >
                                <img src={facebook} alt="btn" />
                                Continue with Facebook
                              </button>
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn-second-2 btn-google full-width"
                              >
                                <img src={google} alt="btn" />
                                Continue with Google
                              </button>
                            </div>
                            <div className="form-group text-center">
                              <p className="text-light-black mb-0">
                                Have an account?{" "}
                                <Link to="/login">Sign in</Link>
                              </p>
                            </div>{" "}
                            <span className="text-light-black fs-12 terms">
                              By creating your Ecom account, you agree to the{" "}
                              <Link to="#"> Terms of Use </Link> and{" "}
                              <Link to="#"> Privacy Policy.</Link>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
