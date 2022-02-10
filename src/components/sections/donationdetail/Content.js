import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newslettertwo';
import Sidebar from '../../layouts/Donationsidebar';
import tags from '../../../data/donation/tags.json';
import comment from '../../../data/donation/comments.json';

import banner from '../../../assets/img/blog/details.jpg';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="our-articles bg-light-white section-padding ">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <div className="main-box padding-20 full-width sa-causes-single sa-causes-single-2  mb-md-40">
                                    <div className="post-wrapper mb-xl-20">
                                        <div className="blog-item-img">
                                            <img src={banner} className="img-fluid full-width" alt="#" />
                                            <div className="dontaion-category"><Link to="/donation-details">Education</Link></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="blog-meta mb-xl-20">
                                                <h5 className="blog-title text-light-black">Best Democratic Party in Brooklyn.</h5>
                                                <div className="cause-progress mt-0">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{ width: '17%' }}/>
                                                </div>
                                                <div className="causes-amount">
                                                    <div className="left mb-20">
                                                        <p>Raised</p>
                                                        <span>$4585.00</span>
                                                    </div>
                                                    <div className="right mb-20">
                                                        <p>Goal</p>
                                                        <span>$4585.00</span>
                                                    </div>
                                                </div>
                                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Why do we choose it?</h6>
                                                <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                  for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                            <blockquote>
                                                <p>"Chinese is the popular Producrt, Lorem Ipsum is not simply random text. It has roots in a piece of classical chinese."</p>
                                            </blockquote>
                                            <hr />
                                            <div className="post-details-tags-social mb-xl-20">
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-6">
                                                        <div className="tags-box">
                                                            <span className="fs-18 text-light-white"><i className="fas fa-tags" /></span>
                                                            <div className="tags">
                                                                {tags.slice(0, 3).map((item, i) => (
                                                                    <Link to="/donation-details" key={i}>{item.title}</Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="social-media-box">
                                                            <ul className="custom">
                                                                <li><Link to="#" className="fb"><i className="fab fa-facebook-f" /></Link></li>
                                                                <li><Link to="#" className="tw"><i className="fab fa-twitter" /></Link></li>
                                                                <li><Link to="#" className="gg"><i className="fab fa-google-plus-g" /></Link></li>
                                                                <li><Link to="#" className="ln"><i className="fab fa-linkedin-in" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box">
                                                <div className="section-header-left">
                                                    <h6 className="text-light-black header-title">Comments</h6>
                                                </div>
                                                {comment.map((item, i) => (
                                                    <Fragment key={i}>

                                                        <div className="review-box">
                                                            <div className="review-user">
                                                                <div className="review-user-img">
                                                                    <img src={item.img} className="rounded-circle" alt="#" />
                                                                    <div className="reviewer-name">
                                                                        <p className="text-light-black fw-600">{item.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="review-date"> <span className="text-light-white">{item.commentdate}</span>
                                                                </div>
                                                            </div>
                                                            <p className="text-light-black">{item.comment}</p>
                                                        </div>
                                                        {item.replies.map((reply, i) => (
                                                            <div key={i} className="review-box comment-reply">
                                                                <div className="review-user">
                                                                    <div className="review-user-img">
                                                                        <img src={reply.img} className="rounded-circle" alt="#" />
                                                                        <div className="reviewer-name">
                                                                            <p className="text-light-black fw-600">{reply.name} </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="review-date"> <span className="text-light-white">{reply.commentdate}</span>
                                                                    </div>
                                                                </div>
                                                                <p className="text-light-black">{reply.comment}</p>
                                                            </div>
                                                        ))}
                                                    </Fragment>
                                                ))}
                                            </div>
                                            <div className="comment-form">
                                                <div className="section-header-left">
                                                    <h6 className="text-light-black header-title">Leave a Reply</h6>
                                                </div>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="text-light-black fw-600">Full Name</label>
                                                                <input type="text" name="#" className="form-control form-control-submit" placeholder="Full Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="text-light-black fw-600">Email Address</label>
                                                                <input type="email" name="#" className="form-control form-control-submit" placeholder="Email Address" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="text-light-black fw-600">Your Comment</label>
                                                                <textarea className="form-control form-control-submit" name="#" rows={6} placeholder="Your Comment" defaultValue={""} />
                                                            </div>
                                                            <button type="submit" className="btn-second btn-submit full-width">Send</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <aside className="col-xl-3 col-lg-4">
                                <Sidebar />
                            </aside>
                        </div>
                    </div>
                </section>
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;