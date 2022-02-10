import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import shoppost from '../../../data/shop/shoppost.json';
import Quickview from '../../layouts/Quickview';
import Newsletter from '../../layouts/Newslettertwo';
import Pagination from '../../layouts/Pagination';
import Shopsidebar from '../../layouts/Shopsidebar';

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
class Content extends Component {
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
            <Fragment>
                <section className="section-padding our-product bg-light-white">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4">
                                <Shopsidebar />
                            </div>
                            <div className="col-xl-9 col-lg-8">
                                <div className="full-width">
                                    <div className="row">
                                        {shoppost.map((item, i) => (
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
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </section>
                <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <button type="button" className="close" onClick={this.handleClose}>×</button>
                        <Quickview />
                    </Modal.Body>
                </Modal>
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;