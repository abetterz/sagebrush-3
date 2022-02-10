import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import shoppost from '../../../data/shop/shoppost.json';
import Quickview from '../../layouts/Quickview';

import featured from '../../../assets/img/shop/featured2.jpg';

const quickviewtip = (
    <Tooltip>
        Quick View
    </Tooltip>
);
const wishlisttip = (
    <Tooltip>
        Add to Wishlist
    </Tooltip>
);

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
class Campaign extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
        };
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleClose() {
        this.setState({ show: false });
    }
    render() {
        return (
            <section className="section-padding our-product">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title"> Help us fund our campaigns</h3>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8">
                            <div className="row">
                                {shoppost.slice(0, 8).map((item, i) => (
                                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                        <div className="product-box mb-md-20">
                                            <div className="product-img">
                                                <Link to="/shop-details">
                                                    <img src={item.img} className="img-fluid full-width" alt="product-img" />
                                                </Link>
                                                <div className="product-badge">
                                                    {
                                                        item.veg === true ? <div className="product-label new">
                                                            <span>Album</span>
                                                        </div> : ''
                                                    }
                                                    {
                                                        item.meat === true ? <div className="product-label uni">
                                                            <span>Music</span>
                                                        </div> : ''
                                                    }
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <div className="product-label discount">
                                                            <span>{item.discount}%</span>
                                                        </div> : ''
                                                    }
                                                </div>
                                                <div className="button-group">
                                                    <OverlayTrigger placement="left" overlay={wishlisttip}>
                                                        <Link to="#" > <i className="pe-7s-like" /> </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="left" overlay={quickviewtip}>
                                                        <Link to="#" onClick={this.handleShow}> <i className="pe-7s-search" /> </Link>
                                                    </OverlayTrigger>
                                                </div>
                                                <div className="cart-hover">
                                                    <Link to="/shop-details" className="btn-cart  fw-600" tabIndex={-1}>Add To Cart</Link>
                                                </div>
                                            </div>
                                            <div className="product-caption text-center">
                                                <div className="product-status">
                                                    <ul className="product-raised">
                                                        <li><strong>Sold:</strong> {item.soldprice}</li>
                                                        <li><strong>Goal:</strong><span className="text-highlight"> {item.goalprice}</span></li>
                                                    </ul>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-color" style={{ width: (item.soldprice * 100) / item.goalprice + '%' }} />
                                                    </div>
                                                </div>
                                                <h6 className="product-title fw-500 mt-10"><Link to="/shop-details" className="text-color-secondary">{item.title}</Link></h6>
                                                <div className="product-money mt-10">
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span className="text-price">${item.price * (100 - item.discount) / 100}</span> : ''
                                                    }
                                                    {
                                                        <span className="text-price">${item.price}</span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="large-product-box p-relative">
                                <div className="featured-product-box box-shadow">
                                    <div className="featured-pro-title">
                                        <h4 className="fs-22"><strong className="text-color-primary"> Vote</strong> now don't postpone</h4>
                                    </div>
                                    <div className="featured-pro-content">
                                        <div className="featured-pro-text">
                                            <h5><Link to="#">Vote for a better community.</Link></h5>
                                            <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit, sed do eiusmod</p>
                                            <p className="price">$244</p>
                                        </div>
                                    </div>
                                    <div className="featured-pro-img">
                                        <img src={featured} alt="pro-img" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="featured-pro-timer">
                                        <div className="countdown-box">
                                            <Countdown
                                                date={Date.now() + 31622400000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                    <div className="featured-pro-bottom">
                                        <ul>
                                            <li>Votes: <strong>150,000 </strong></li>
                                            <li>Goal: <strong>200,000</strong> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <button type="button" className="close" onClick={this.handleClose}>×</button>
                        <Quickview />
                    </Modal.Body>
                </Modal>
            </section>
        );
    }
}

export default Campaign;