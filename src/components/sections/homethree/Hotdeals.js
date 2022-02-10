import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const hotdealposts = [
    { img: "assets/img/help.jpg", badge: "Enviroment", title: "More than One Life Changed" },
    { img: "assets/img/help1.jpg", badge: "Education", title: "Help for Children of the East" },
    { img: "assets/img/help2.jpg", badge: "Food & Meals", title: "More than One Life Changed" }
];
class Hotdeals extends Component {
    render() {
        return (
            <section className="ex-collection section-padding bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title"> Our Hot Deals</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {hotdealposts.map((item, i) => (
                            <div key={i} className="col-lg-4">
                                <div className="story-wrapper">
                                    <img src={item.img} alt="" className="full-width img-fluid mx-auto d-block" />
                                    <div className="story-box-content story-content-wrapper">
                                        <span className="story-badge bg-custom-primary text-color-secondary">{item.badge}</span>
                                        <h5><Link to="#">{item.title}</Link></h5>
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

export default Hotdeals;