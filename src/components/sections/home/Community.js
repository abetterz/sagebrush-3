import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const communityposts = [
    { colclass: "col-xl-4 col-lg-6", img: "assets/img/story-big/about-1.jpg", badge: "Provide a better enviroment", title: "More than One Life Changed" },
    { colclass: "col-xl-4 col-lg-6", img: "assets/img/story-big/about-2.jpg", badge: "Education", title: "Help for Children of the East" },
    { colclass: "col-xl-4 col-lg-12", img: "assets/img/story-big/about-3.jpg", badge: "Food & Meals", title: "More than One Life Changed" },
    { colclass: "col-xl-8 sm-block", img: "assets/img/story-big/about-4.jpg", badge: "Provide a better enviroment", title: "Help for Children of the East" },
    { colclass: "col-xl-4", img: "assets/img/story-big/about-5.jpg", badge: "Health & Care", title: "More than One Life Changed" },
    { colclass: "col-xl-6", img: "assets/img/story-big/about-2.jpg", badge: "Finance", title: "Help for Children of the East" },
    { colclass: "col-xl-6", img: "assets/img/story-big/about-1.jpg", badge: "Education", title: "More than One Life Changed" }
];

class Community extends Component {
    render() {
        return (
            <section className="ex-collection section-padding bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title"> Our Focus</h3>
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