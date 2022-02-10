import React, { Component } from 'react';
import Description from './Description';
import { Link } from 'react-router-dom';
import Slider from './Slider';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    };
    DecreaseItem = () => {
        if (this.state.clicks < 1) {
            this.setState({
                clicks: 0,
            });
        } else {
            this.setState({
                clicks: this.state.clicks - 1,
            });
        }
    };
    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    render() {
        
        return (
            <section className="section-padding  bg-theme-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="shop-detail-image">
                                <Slider/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="shop-detail-contents mb-md-40 mt-md-40">
                                <div className="shop-detail-content-wrapper">
                                    <h6 className="text-custom-black">Handmade Golden Necklace Full Family Package</h6>
                                </div>
                                <div className="ratings d-flex mb-xl-20"> <span className="text-yellow"><i className="fas fa-star" /></span>
                                    <span className="text-yellow"><i className="fas fa-star" /></span>
                                    <span className="text-yellow"><i className="fas fa-star" /></span>
                                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                                    <span className="text-dark-white"><i className="fas fa-star" /></span>
                                    <div className="pro-review"> <span>1 Reviews</span>
                                    </div>
                                </div>
                                <div className="price">
                                    <h5 className="text-color-primary price-tag">$45 <span className="text-light-white fw-400 fs-14">$50</span></h5>
                                </div>
                                <div className="product-full-des mb-20">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                </div>
                                <div className="availibity mt-20">
                                    <p className="text-custom-black fw-600">Avability: <span className="text-success ml-2">In Stock</span></p>
                                </div>
                                <div className="quantity mb-xl-20">
                                    <p className="text-custom-black mb-0 mr-2 fw-600">Qty:</p>
                                    <div className="product-qty-input">
                                        <button className="minus-btn" type="button" name="button" onClick={this.DecreaseItem}> <i className="fas fa-minus" />
                                        </button>
                                        <input type="text" className="form-control form-control-qty text-center" name="name" value={this.state.clicks} onChange={this.handleChange.bind(this)} readOnly  />
                                        <button className="plus-btn" type="button" name="button" onClick={this.IncrementItem}> <i className="fas fa-plus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="shop-bottom">
                                    <div className="shop-meta mt-20">
                                        <p className="text-custom-black mb-0 fw-600">Categories:</p>
                                        <ul className="list-inline ml-2">
                                            <li className="list-inline-item"><Link to="#">Necklace</Link>
                                            </li>
                                            <li className="list-inline-item"><Link to="#">Diamond</Link>
                                            </li>
                                            <li className="list-inline-item"><Link to="#">Sale</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="shop-meta mt-20">
                                        <p className="text-custom-black mb-0 fw-600">Tags:</p>
                                        <ul className="list-inline ml-2">
                                            <li className="list-inline-item"><Link to="#">Luxary</Link>
                                            </li>
                                            <li className="list-inline-item"><Link to="#">Diamond</Link>
                                            </li>
                                            <li className="list-inline-item"><Link to="#">New Arrivel</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-btn mt-20"> <Link to="#" className="btn-solid with-line ml-2">Add to Cart </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <Description/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Detail;