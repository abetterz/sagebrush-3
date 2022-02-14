import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import shoppost from '../../../data/shop/shoppost.json';
import Quickview from '../../layouts/Quickview';

import register from '../../../assets/img/register.jpg';

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

class Campaigns extends Component {
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
            <section className="section-padding our-product" style={{ display: "none" }}>
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
                            <div className="verticle-newsletter bg-custom-white main-box">
                                <div className="verticle-newsletter-inner">
                                    <h6 className="text-light-black">Subscribe To Newsletter</h6>
                                    <p className="text-light-white mb-xl-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="group-form mb-xl-20">
                                        <div className="input-group">
                                            <input type="email" name="#" className="form-control form-control-submit" />
                                            <div className="input-group-append">
                                                <button>Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="register-info-box text-center">
                                        <div className="icon-sec">
                                            <i className="pe-7s-id" />
                                        </div>
                                        <h6><Link to="#" className="text-light-black">Register to Vote</Link></h6>
                                        <p className="text-light-white mb-0">Lorem Ipsum is simply dummy text.</p>
                                    </div>
                                </div>
                                <div className="verticle-newsletter-img">
                                    <img src={register} className="image-fit" alt="img" />
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
            </section >
        );
    }
}

export default Campaigns;