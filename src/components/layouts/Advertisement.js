import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment>
            <div className="time-box">
                <span>{days}</span>
                <span>Days</span>
            </div>
            <div className="time-box">
                <span>{hours}</span>
                <span>Hours</span>
            </div>
            <div className="time-box">
                <span>{minutes}</span>
                <span>Minutes</span>
            </div>
            <div className="time-box">
                <span>{seconds}</span>
                <span>Seconds</span>
            </div>
        </Fragment>;
    }
};
class Advertisement extends Component {
    render() {
        return (
            <section className="section-padding advertisement-banner-1 center-bg-effect">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="advertisement-text-1 center-block-div">
                                <h6 className="sub-head">Our Causes</h6>
                                <h3 className="text-white heading">Lets Change The World <span className="text-white">With Humanity</span>
                                </h3>
                                <div className="ad-count justify-content-center">
                                    <div className="countdown-box sigma_countdown-timer-white" data-countdown="2022/12/06">
                                        <Countdown
                                            date={Date.now() + 31622400000}
                                            renderer={renderer}
                                        />
                                    </div>
                                </div>
                                <Link to="/story-archive" className="btn btn-text btn-text-white mt-20">Become A Volunteer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advertisement;