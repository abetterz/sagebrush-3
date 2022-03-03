import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import video from "../../../assets/img/video-bg.mp4";


class About extends Component {
    render() {
        return (
            <section className="about-section-style-1">
                <div className="row no-gutters bg-custom-primary d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="full-height" style={{ lineHeight: 1 }}>
                            <video controls poster="assets/img/home-mission-statement.jpg" className="img-fluid full-width full-height">
                                <source src={video} type="video/mp4" />
                            </video>
                            {/* <img src="assets/img/home-mission-statement.jpg" alt="img" className="img-fluid full-width full-height" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-section-container">
                            <div className="section-header-left pb-0">
                                <h3 className="header-title text-white mb-20">Mission Statement</h3>
                                <p className="text-white">
                                    America was built by settlers, cowboys, laborers, and businessmen. Citizens who were ambitious and worked towards prosperity and security. The United States was once the irrefutable standard-bearer of liberty for all mankind.
                                </p>
                                <p className="text-white">
                                    However, the America we all love is almost unrecognizable. Our current government has been bought and paid for by foreign and corporate interests that would love to see America and her citizens fail.
                                </p>
                                <p className="text-white">
                                    We are a new type of organization that is made up of grassroots fighters who are not beholden to Washington’s inner circles. We are committed to gutting incompetent and corrupt leaders from the political process and supporting individuals who will do what is necessary to save America.
                                </p>
                                <p className="text-white">
                                    Sagebrush Rebellion is here to remind the Washington elites who they really work for. Not the billionaires, not the corporations, and not the special interest groups. They work for, We The People.
                                </p>
                                <p className="text-white">
                                    Help us start a rebellion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;