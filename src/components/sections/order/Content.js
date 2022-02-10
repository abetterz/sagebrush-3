import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newslettertwo';
import Countdown from 'react-countdown';
import checkoutdata from '../../../data/shop/checkout.json';

import banner from '../../../assets/img/shop/check1.jpg';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <Fragment><div className="time-box"> <span id="mb-hours">{hours}</span></div><div className="time-box"> <span id="mb-minutes">{minutes}</span></div><div className="time-box"> <span id="mb-seconds">{seconds}</span></div></Fragment>;
    }
};

const priceTotal = checkoutdata.reduce((totalPrice, item) => totalPrice + item.price*item.qty, 0);
class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="checkout-page section-padding bg-light-white">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tracking-sec">
                                    <div className="tracking-details padding-20 p-relative">
                                        <h5 className="text-light-black fw-600">Sports Shoes</h5>
                                        <span className="text-light-white">Estimated Delivery time</span>
                                        <h6 className="text-light-black fw-500 no-margin">9:00pm-9:10pm</h6>
                                        <div id="add-listing-tab" className="step-app">
                                            <ul className="step-steps">
                                                <li className="done">
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">Order sent<br />8:38pm</span>
                                                    </Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">In the works</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">Out of delivery</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#"> <span className="number" />
                                                        <span className="step-name">Delivered</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <button type="button" className="fullpageview text-light-black fw-600" data-modal="modal-12">Full Page View</button>
                                        </div>
                                    </div>
                                    <div className="tracking-map">
                                        <iframe id="pickupmap" title="map" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                    </div>
                                </div>
                                {/* recipt */}
                                <div className="recipt-sec padding-20">
                                    <div className="recipt-name title u-line full-width mb-xl-20">
                                        <div className="recipt-name-box">
                                            <h5 className="text-light-black fw-600 mb-2">Sport Shoes</h5>
                                            <p className="text-light-white ">Estimated Delivery time</p>
                                        </div>
                                        <div className="countdown-box">
                                            <Countdown
                                                date={Date.now() + 31622400000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                    <div className="u-line mb-xl-20">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="recipt-name full-width padding-tb-10 pt-0">
                                                    <h5 className="text-light-black fw-600">Delivery (ASAP) to:</h5>
                                                    <span className="text-light-white ">Jhon Moxley</span>
                                                    <span className="text-light-white ">Home</span>
                                                    <span className="text-light-white ">314 79th St</span>
                                                    <span className="text-light-white ">Rite Aid, Brooklyn, NY, 11209</span>
                                                    <p className="text-light-white ">(347) 123456789</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="recipt-name full-width padding-tb-10 pt-0">
                                                    <h5 className="text-light-black fw-600">Delivery instructions</h5>
                                                    <p className="text-light-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="ad-banner padding-tb-10 h-100">
                                                    <img src={banner} className="img-fluid full-width" alt="banner-adv" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="u-line mb-xl-20">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="text-light-black fw-600 title">Your Order <span><Link to="#" className="fs-12">Print recipt</Link></span></h5>
                                                <p className="title text-light-white">Jan 15, 2022 8:38pm <span className="text-light-black">Order #123456789012345</span>
                                                </p>
                                            </div>
                                            <div className="col-lg-12">
                                                {checkoutdata.map((item, i) => (
                                                    <div key={i} className="checkout-product">
                                                        <div className="img-name-value">
                                                            <div className="product-img">
                                                                <Link to="#">
                                                                    <img src={item.img} alt="#" />
                                                                </Link>
                                                            </div>
                                                            <div className="product-value"> <span className="text-light-white">{item.qty}</span>
                                                            </div>
                                                            <div className="product-name"> <span><Link to="#" className="text-light-white">{item.name}</Link></span>
                                                            </div>
                                                        </div>
                                                        <div className="amount">
                                                            <span className="text-light-white">ID: #000{item.id}</span>
                                                        </div>
                                                        <div className="Category">
                                                            <span className="text-light-white">{item.category}</span>
                                                        </div>
                                                        <div className="price"> <span className="text-light-white">${new Intl.NumberFormat().format((item.price * item.qty).toFixed(2))}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="payment-method mb-md-40">
                                                <h5 className="text-light-black fw-600">Payment Method</h5>
                                                <div className="method-type"> <i className="far fa-credit-card text-dark-white" />
                                                    <span className="text-light-white">Credit Card</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="price-table u-line">
                                                <div className="item"> <span className="text-light-white">Item subtotal:</span>
                                                    <span className="text-light-white">${new Intl.NumberFormat().format((priceTotal).toFixed(2))}</span>
                                                </div>
                                                <div className="item"> <span className="text-light-white">Delivery fee:</span>
                                                    <span className="text-light-white">$40.00</span>
                                                </div>
                                                <div className="item"> <span className="text-light-white">Tax and fees:</span>
                                                    <span className="text-light-white">$5.00</span>
                                                </div>
                                                <div className="item"> <span className="text-light-white">Driver tip:</span>
                                                    <span className="text-light-white">$10.00</span>
                                                </div>
                                            </div>
                                            <div className="total-price padding-tb-10">
                                                <h5 className="title text-light-black fw-500">Total: <span>${new Intl.NumberFormat().format((priceTotal + 40.00 + 5.00 + 10.00 ).toFixed(2))}</span></h5>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex"> <Link to="#" className="btn-first white-btn fw-600 help-btn">Need Help?</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;