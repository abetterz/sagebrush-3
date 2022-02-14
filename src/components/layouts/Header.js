import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import classNames from "classnames";

import logo from "../../assets/img/logo1.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navmethod: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  // Navigation
  toggleNav() {
    this.setState({
      navmethod: !this.state.navmethod,
    });
  }
  // Sticky Header
  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 100,
        });
      },
      false
    );
  }
  render() {
    const stickyheader = this.state.isTop ? "sticky" : "";
    return (
      <Fragment>
        <header className={`header ${stickyheader}`}>
          <div className="container-fluid custom-container">
            <div className="row">
              <div className="col-12">
                <div className="navigation">
                  <div className="logo">
                    <Link to="/">
                      {/* <img src={logo} className="image-fit" alt="logo" /> */}
                    </Link>
                  </div>
                  <div
                    className={classNames("main-navigation", {
                      active: this.state.navmethod,
                    })}
                  >
                    <Menu />
                  </div>
                  <div className="right-side-navigation">
                    <ul style={{ display: "none" }}>
                      <li className="hamburger-menu">
                        <Link
                          to="#"
                          className={classNames("menu-btn", {
                            active: this.state.navmethod,
                          })}
                          onClick={this.toggleNav}
                        >
                          <span />
                          <span />
                          <span />
                        </Link>
                      </li>
                      <li className="user-details">
                        <Link to="#">
                          {" "}
                          <i className="pe-7s-user" /> <span>Hi, Andrew</span>
                        </Link>
                      </li>
                      <li className="wishlist">
                        {" "}
                        <Link to="#" className="text-dark-red">
                          <i className="pe-7s-bell" />
                        </Link>
                        <span className="cart">3</span>
                      </li>
                      <li className="cart">
                        {" "}
                        <Link to="#" className="text-dark-red">
                          <i className="pe-7s-cart" />
                        </Link>
                        <span className="cart">3</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="main-sec" />
      </Fragment>
    );
  }
}

export default Header;
