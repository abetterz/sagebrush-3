import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const communityposts = [
    { colclass: "col-lg-4", link: "/more-than-one-life-changed", img: "assets/img/story-big/about-1.jpg", badge: "Enviroment", title: "More than One Life Changed" },
    { colclass: "col-lg-4", link: "/help-children-east", img: "assets/img/story-big/about-2.jpg", badge: "Education", title: "Help for Children of the East" },
    { colclass: "col-lg-4", link: "/more-than-one", img: "assets/img/story-big/about-3.jpg", badge: "Food & Meals", title: "More than One Life Changed" },
    { colclass: "col-lg-6", link: "/more-than-two", img: "assets/img/story-big/about-6.jpg", badge: "Finance", title: "Help for Children of the East" },
    { colclass: "col-lg-6", link: "/more-than-three", img: "assets/img/story-big/about-7.jpg", badge: "Education", title: "More than One Life Changed" }
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