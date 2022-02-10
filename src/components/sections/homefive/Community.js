import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const community = [
    { img: "assets/img/shop/featured5.jpg", badge: "Enviroment", title: "More than One Life Changed" },
    { img: "assets/img/shop/featured6.jpg", badge: "Enviroment", title: "More than One Life Changed" }
];

class Community extends Component {
    render() {
        return (
            <section className="ex-collection section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Our Hot Deals</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {community.map((item, i) => (
                            <div key={i} className="col-lg-6 col-md-12">
                                <div className="story-wrapper">
                                    <img src={item.img} alt="" className="full-width img-fluid mx-auto d-block" />
                                    <div className="story-box-content story-content-wrapper">
                                        <span className="story-badge bg-custom-primary text-color-secondary">{item.badge}</span>
                                        <h5><Link to="/shop-details">{item.title}</Link></h5>
                                        <Link to="/shop-details" className="btn btn-text btn-text-white">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Community;