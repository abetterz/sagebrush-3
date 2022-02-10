import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import donationpost from '../../../data/donation/donationpost.json'

class Donation extends Component {
    render() {
        return (
            <section className="section-padding ex-collection bg-theme-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left">
                                <h3 className="text-light-black header-title title">Our Donation Campaigns</h3>
                            </div>
                        </div>
                        {donationpost.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="sa-causes-single sa-causes-single-2">
                                    <div className="causes-details-wrap">
                                        <div className="causes-details">
                                            <h5><Link to="#">{item.title}</Link></h5>
                                            <p>{item.description}</p>
                                            <div className="entry-thumb mtmb-spacing">
                                                <img src={item.img} alt="img" className="img-fluid full-width" />
                                                <div className="dontaion-category"><Link to="#">{item.category}</Link></div>
                                            </div>
                                            <div className="cause-progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{ width: (item.raised * 100) / item.goal + '%' }}>
                                                    <span>{(Math.round(item.raised * 100) / item.goal).toFixed(2) + '%'}</span>
                                                </div>
                                            </div>
                                            <div className="causes-amount">
                                                <div className="left">
                                                    <p>Raised</p>
                                                    <span>${item.raised}.00</span>
                                                </div>
                                                <div className="right">
                                                    <p>Goal</p>
                                                    <span>${item.goal}.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-area text-center">
                                        <Link className="btn-donation text-btn" to="#">donate now</Link>
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

export default Donation;