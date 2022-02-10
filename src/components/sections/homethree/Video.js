import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import $ from 'jquery';
import 'magnific-popup';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment><div className="time-box"> <span>{days}<h6 className="mb-0">Days</h6></span></div><div className="time-box"> <span>{hours}<h6 className="mb-0">Hours</h6></span></div><div className="time-box"> <span>{minutes}<h6 className="mb-0">Minutes</h6></span></div><div className="time-box"> <span>{seconds}<h6 className="mb-0">Seconds</h6></span></div></Fragment>;
    }
};

class Video extends Component {
    componentDidMount(){
        function popup(){
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <section className="section-padding advertisement-banner-1 bg-banner-sponsr">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="advertisement-text-1">
                                <h6 className="sub-head">We do it for all people</h6>
                                <h3 className="text-white heading">Delivering help and hope to <span className="text-color-primary">children</span> through sponsorship.</h3>
                                <div className="ad-count justify-content-start">
                                    <div className="countdown-box">
                                        <Countdown
                                            date={Date.now() + 31622400000}
                                            renderer={renderer}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 align-self-center">
                            <div className="blob play-btn ">
                                <Link to="https://www.youtube.com/watch?v=Fm0x3V7cOPE" className="popup-video"> <i className="fas fa-play" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;