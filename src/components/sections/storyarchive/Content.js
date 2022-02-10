import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newslettertwo';
import Pagination from '../../layouts/Pagination';
import storyblock from '../../../data/story/storyblock.json';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="our-articles bg-light-theme section-padding ">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className=" full-width">
                                    <div className="row">
                                        {storyblock.map((item, i) => (
                                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                                <div className="sa-causes-single sa-causes-single-2">
                                                    <div className="entry-thumb">
                                                        <img src={item.img} alt="img" className="img-fluid full-width" />
                                                        <div className="dontaion-category story-meta">
                                                            <p><strong>{item.authorname}</strong></p>
                                                            <p>Votes: <strong>${item.goalprice}.00</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="causes-details-wrap">
                                                        <div className="causes-details">
                                                            <h5><Link to="/story-details">{item.title}</Link></h5>
                                                            <p>{item.text}</p>
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
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;