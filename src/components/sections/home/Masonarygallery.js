import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

class Masonarygallery extends Component {
    componentDidMount() {
        function popup() {
            $('.popup').magnificPopup({
                type: 'image'
            });
            $('.videopopup').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <section className="masonary-gallery-sec">
                <div className="container-fluid no-padding">
                    <div className="row magnific-gallery">
                        <div className="col-lg-6">
                            <div className="full-height masonary-box p-relative">
                                <div className="masonary-text transform-center">
                                    <div className="masonary-text-wrapper">
                                        <div className="icon-box">
                                            <img src="assets/img/gallery/thisisimage6.jpg" className="image-fit" alt="img" />
                                        </div>
                                        <div className="text-box">
                                            <h3 className="text-custom-white">
                                                Stay up-todate, Follow us on our Instagram &amp; Twitter page for daily updates
                </h3>
                                            <Link to="#" className="text-custom-white fs-14"><i className="fab fa-instagram mr-2" /> @Political</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-box full-height">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <img src="assets/img/gallery/thisisimage1.jpg" className="image-fit" alt="#" />
                                        <div className="video-inner video-btn-wrapper"> <Link to="https://www.youtube.com/embed/bu_zYkgu6GU" className="videopopup"><i className="pe-7s-play" /></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0">
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <Link to="assets/img/gallery/thisisimage2.jpg" className="popup">
                                        <img src="assets/img/gallery/thisisimage2.jpg" className="image-fit" alt="img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <Link to="assets/img/gallery/thisisimage4.jpg" className="popup">
                                        <img src="assets/img/gallery/thisisimage4.jpg" className="image-fit" alt="img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <Link to="assets/img/gallery/thisisimage3.jpg" className="popup">
                                        <img src="assets/img/gallery/thisisimage3.jpg" className="image-fit" alt="img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <Link to="assets/img/gallery/thisisimage5.jpg" className="popup">
                                        <img src="assets/img/gallery/thisisimage5.jpg" className="image-fit" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Masonarygallery;