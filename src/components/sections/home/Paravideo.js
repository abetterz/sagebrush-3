import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import $ from 'jquery';
import 'magnific-popup';

const iconposts = [
    { icon: "assets/img/help.svg" },
    { icon: "assets/img/cash.svg" },
    { icon: "assets/img/investor.svg" },
    { icon: "assets/img/help.svg" },
    { icon: "assets/img/money.svg" }
];


// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment><div className="counter-box"> <span id="cb-days">{days}<p className="mb-0">Day</p></span>
        </div>
            <div className="counter-box"> <span id="cb-hours">{hours}<p className="mb-0">Hr</p></span>
            </div>
            <div className="counter-box"> <span id="cb-minutes">{minutes}<p className="mb-0">Min</p></span>
            </div>
            <div className="counter-box"> <span id="cb-seconds">{seconds}<p className="mb-0">Sec</p></span>
            </div></Fragment>;
    }
};
class Paravideo extends Component {
    componentDidMount() {
        function popup() {
            $('.popup').magnificPopup({
                type: 'iframe',
            });
        }
        popup();
    }
    render() {
        return (
            <Fragment>
                <section className="section-padding-top paravideo-icon-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="icon-sec">
                                    <div className="row">
                                        {iconposts.map((item, i) => (
                                            <div key={i} className="col">
                                                <div className="icon-box">
                                                    <Link to="#">
                                                        <img src={item.icon} alt="img" />
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-padding-bottom paravideo-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="video-sec">
                                    <div className="row no-gutters">
                                        <div className="col-lg-8">
                                            <div className="full-height video-sec-left section-padding">
                                                <div className="video-sec-left-inner">
                                                    <ul>
                                                        <li className="fs-14 text-custom-pink mb-xl-20">
                                                            <i className="fas fa-calendar-week" />
                                                            <span className="text-custom-white">24 May 2022</span>
                                                        </li>
                                                        <li className="fs-14 text-custom-pink mb-xl-20">
                                                            <i className="fas fa-map-marker-alt" />
                                                            <span className="text-custom-white">Newyork (USA)</span>
                                                        </li>
                                                    </ul>
                                                    <h3 className="text-custom-white">Upcoming Campaign</h3>
                                                    <div className="upcoming-cam-timer">
                                                        <div className="countdown-box">
                                                            <Countdown
                                                                date={Date.now() + 31622400000}
                                                                renderer={renderer}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="full-height video-sec-right">
                                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                                    <div className="videoPoster js-videoPoster">
                                                        <img src="assets/img/vid.jpg" className="image-fit" alt="#" />
                                                        <div className="video-inner video-btn-wrapper blob play-btn "> <Link to="https://www.youtube.com/embed/bu_zYkgu6GU" className="popup"><i className="pe-7s-play" /></Link></div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Paravideo;