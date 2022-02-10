import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import image from '../../../assets/img/about1.jpg';
import sign from '../../../assets/img/about1.png';

const quoteposts = [
    { text: "Real Talk: Tax Reform, Criminal Justice", author: "Jessica Lea" },
    { text: "Supporters Overwhelm Campaign Event", author: "Jhone Deo" },
    { text: "America's commitment will not weaken", author: "Steve Mila" }
];
class Abouttext extends Component {
    render() {
        return (
            <section className="aboutus section-padding">
                <div className="container-fluid custom-container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-9">
                            <div className="history-title mb-lg-40">
                                <h2 className="text-light-black">See what we do for the poor people and <span className="text-color-primary">the children</span></h2>
                               
                                <h4 className="text-light-black">How can we help the community?</h4>
                                <div className="row justify-content-between">
                                    <div className="col-md">
                                        <div className="about-box">
                                            <p className="text-light-white mb-xl-20">
                                                Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec ipsu sagittis sebh id elit.
                </p>
                                        </div>
                                        <div className="row full-height">
                                            <div className="col-12 full-height">
                                                <div className="img-box mb-sm-40">
                                                    <img src={image} className="image-fit" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="about-box">
                                            <h5 className="btn-text-dark">Klara Montesino</h5>
                                            <p className="text-light-white mb-xl-20">
                                                Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec ipsu sagittis sebh id elit. Duis sed odio sit amet nibh vulputatrsus a sit amet mauris morbi ipsum.
                </p>
                                        </div>
                                        <div className="about-box">
                                            <h5 className="btn-text-dark">Klara Montesino</h5>
                                            <p className="text-light-white mb-xl-20">
                                                Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec ipsu sagittis sebh id elit. Duis sed odio sit amet nibh vulputatrsus a sit amet mauris morbi ipsum.
                </p>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="about-box ">
                                            <p className="text-light-white custom-lh mb-xl-20">
                                                Lorem Ipsum. Proin gravida nibh vel velit amet auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec ipsu sagittis sebh id elit. Duis sed odio sit amet nibh vulputatrsus a sit amet mauris morbi ipsum.
                </p>
                                            <ul>
                                                <li className="fs-14 text-light-white">
                                                    <i className="fas fa-check" />A Fair Tax System
                  </li>
                                                <li className="fs-14 text-light-white">
                                                    <i className="fas fa-check" />Climate Change
                  </li>
                                                <li className="fs-14 text-light-white">
                                                    <i className="fas fa-check" />Health Consultation
                  </li>
                                                <li className="fs-14 text-light-white">
                                                    <i className="fas fa-check" />Gun Violence Prevention
                  </li>
                                            </ul>
                                            <p className="text-light-black fw-700 mb-1">J. D 2022</p>
                                            <img src={sign} className="mb-xl-20" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="row d-none d-xl-block">
                                {quoteposts.map((item, i) => (
                                    <div key={i} className="col-xl-12 col-md-4 col-sm-6">
                                        <div className="about-quote-box">
                                            <h6 className="text-custom-white">{item.text}</h6>
                                            <p className="text-custom-white">By {item.author}</p>
                                            <i className="fas fa-quote-right" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Swiper className="row d-xl-none d-lg-block">
                                {quoteposts.map((item, i) => (
                                    <SwiperSlide key={i} className="col-xl-12 col-md-4 col-sm-6">
                                        <div className="about-quote-box">
                                            <h6 className="text-custom-white">{item.text}</h6>
                                            <p className="text-custom-white">By {item.author}</p>
                                            <i className="fas fa-quote-right" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Abouttext;