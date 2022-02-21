import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import classNames from "classnames";
import squareLogo from "../../assets/img/SquareLogoSBR_Vector.svg";

class Topbar extends Component {
  render() {
    const squareLogoStyle = {
      position: 'absolute',
      width: '40px',
      height: '40px',
      left: '20px',
      top: '4px'
    }
    return (
      <div className="top-header">
        <Link to="/">
          <img src={squareLogo} style={squareLogoStyle} className="image-fit" alt="square-logo" />
        </Link>
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-md-4">
              <div className="top-left">
                <ul className="top-info">
                  <li>
                    <Link to="#">
                      <i className="fas fa-phone-alt" /> +1 863 123-4568
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-envelope" /> info@sagebrush.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="main-navigation"
              >
                <Menu />
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-right">
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
                <Link to="#" className="top-btn">
                  DONATE TODAY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
