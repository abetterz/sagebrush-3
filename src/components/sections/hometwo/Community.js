import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const communityposts = [
    { colclass: "col-lg-4", link: "/agriculture-and-food-security", img: "assets/img/story-big/about-1.jpg", badge: "Nutrition", title: "Agriculture and Food Security" },
    { colclass: "col-lg-4", link: "/chinese-aggression", img: "assets/img/story-big/about-2.jpg", badge: "China", title: "Chinese Aggression" },
    { colclass: "col-lg-4", link: "/american-industry", img: "assets/img/story-big/home-community-american-history.jpg", badge: "Economy", title: "American Industry" },
    { colclass: "col-lg-6", link: "/crypto-currencies", img: "assets/img/story-big/home-community-local-crypto-currencies.jpg", badge: "Finance", title: "Crypto Currencies" },
    { colclass: "col-lg-6", link: "/local-land-management", img: "assets/img/story-big/home-community-local-land-management.jpg", badge: "Land", title: "Local Land Management" }
];

class Community extends Component {
    render() {
        return (
            <section className="ex-collection section-padding bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title"> Our Promise To The Community</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {communityposts.map((item, i) => (
                            <div key={i} className={item.colclass}>
                                <div className="story-wrapper">
                                    <img src={item.img} alt="" className="full-width img-fluid mx-auto d-block" />
                                    <div className="story-box-content story-content-wrapper">
                                        <span className="story-badge bg-custom-primary text-color-secondary">{item.badge}</span>
                                        <h5><Link to="#">{item.title}</Link> </h5>
                                        <Link to={item.link} className="btn btn-text btn-text-white">Read More</Link>
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