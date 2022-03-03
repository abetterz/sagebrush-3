import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newsletterone';
import Sidebar from '../../layouts/Blogsidebar';
import tags from '../../../data/blog/tags.json';
import comment from '../../../data/blog/comments.json';
import blogPosts from '../../../data/blog/blogpost.json';
import details from '../../../assets/img/blog/details.jpg';

function Content(props) {
    const { blog } = props;
    return (
        <Fragment>
            <h1></h1>
            <section className="our-articles bg-light-theme section-padding ">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8">
                            <div className="main-box padding-20 full-width mb-md-40">
                                <div className="post-wrapper mb-xl-20">
                                    <div className="blog-item-img">
                                        <img src={'../' + blog.img} className="img-fluid full-width" alt="#" />
                                        <ul className="blog-item-badge" style={{ display: 'none' }}>
                                            <li><Link to="/blog-details">Water</Link> </li>
                                            <li><Link to="/blog-details">Health</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="blog-meta mb-xl-20">
                                            <h3 className="blog-title text-light-black">{blog.title}</h3>
                                            <div className="blog-meta-author">
                                                <p className="text-light-white mb-0 fs-14">
                                                    <span className="mr-3">
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/blog/user1.jpg"} alt="" />
                                                    </span>
                                                    <div>
                                                        <Link to="/blog-details">{blog.author}</Link>
                                                        <Link to="/blog-details">{blog.postdate}</Link>
                                                    </div>
                                                </p>
                                            </div>
                                            <p className="text-light-black">{blog.text}</p>
                                        </div>

                                        <hr />
                                        <div className="post-details-tags-social mb-xl-20">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-6">
                                                    <div className="tags-box">
                                                        <span className="fs-18 text-light-white"><i className="fas fa-tags" /></span>
                                                        <div className="tags">
                                                            {blog.tags.slice(0, 3).map((item, i) => (
                                                                <Link to="/blog-details" key={i}>{item.name}</Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="social-media-box">
                                                        <ul className="custom">
                                                            <li><Link to="/blog-details" className="fb"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link to="/blog-details" className="tw"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link to="/blog-details" className="gg"><i className="fab fa-google-plus-g" /></Link></li>
                                                            <li><Link to="/blog-details" className="ln"><i className="fab fa-linkedin-in" /></Link></li>
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

export default Content;