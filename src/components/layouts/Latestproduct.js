import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import shoppost from '../../data/shop/shoppost.json';
import Quickview from './Quickview';

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

class Latestproduct extends Component {
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
            <div className="container-fluid custom-container">
                <Tab.Container defaultActiveKey="bestseller">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title">Our Latest Products</h3>
                                <Nav variant="pills" className="nav nav-pills shop-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="bestseller" className="fw-600">Our Best Sellers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="mostrated" className="fw-600">Most Rated</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="mostsaleing" className="fw-600">Most Saleing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link className="nav-link" to="/shop-details">See All</Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="bestseller">
                            <div className="row">
                                {shoppost.slice(0, 8).map((item, i) => (
                                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="mostrated">
                            <div className="row">
                                {shoppost.slice(0, 8).map((item, i) => (
                                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="mostsaleing">
                        <div className="row">
                                {shoppost.slice(0, 8).map((item, i) => (
                                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
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
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body>
                        <button type="button" className="close" onClick={this.handleClose}>×</button>
                        <Quickview />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Latestproduct;