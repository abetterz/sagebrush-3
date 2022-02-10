import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import Newsletter from '../../layouts/Newslettertwo';
import Sidebar from '../../layouts/Storysidebar';
import tags from '../../../data/story/tags.json';
import comment from '../../../data/story/comments.json';
import gallerypost from '../../../data/story/gallery.json';

import mainstory from '../../../assets/img/story-big/mainstory.jpg';


class Content extends Component {
    componentDidMount() {
        function popup() {
            $('.image-popup').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        popup();
    }
    render() {
        return (
            <Fragment>
                <section className="our-articles bg-light-theme section-padding ">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <div className="main-box padding-20 full-width sa-causes-single sa-causes-single-2 mb-md-40">
                                    <div className="post-wrapper mb-xl-20">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="profile-img full-height">
                                                    <img src={mainstory} alt="img" className="img-fluid full-width full-height" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="profile-content">
                                                    <h4>Dr. Michle Colen</h4>
                                                    <p><strong>From:</strong><br /> Brooklyn, NY</p>
                                                    <p><strong>About:</strong><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                                    <p className="mb-20"><strong>Donation:</strong></p>
                                                    <div className="cause-progress profile-donate">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} style={{ width: '17%' }}>
                                                        </div>
                                                    </div>
                                                    <div className="causes-amount">
                                                        <div className="left mb-20">
                                                            <p className="text-dark">Raised</p>
                                                            <span>$4585.00</span>
                                                        </div>
                                                        <div className="right mb-20">
                                                            <p className="text-dark">Goal</p>
                                                            <span>$4585.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-group">
                                                        <Link to="#" className="btn-solid with-line mb-2"><span>Donate Now <i className="fas fa-caret-right" /></span></Link>
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
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="blog-meta mb-xl-20">
                                                <h5 className="blog-title text-light-black">Best Democratic Party in Brooklyn.</h5>
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
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Where can I get that product?</h6>
                                                <p className="text-light-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            </div>
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Why do we choose it?</h6>
                                                <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                                distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                  for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                            <div className="user-gallery">
                                                <div className="row justify-content-center">
                                                    {gallerypost.map((item, i) => (
                                                        <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                                                            <Link to={item.img} className="image-popup">
                                                                <img src={item.img} className="img-fluid rounded mx-auto d-block full-width" alt="#" />
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="post-details-tags-social mb-xl-20">
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-6">
                                                        <div className="tags-box">
                                                            <span className="fs-18 text-light-white"><i className="fas fa-tags" /></span>
                                                            <div className="tags">
                                                                {tags.slice(0, 3).map((item, i) => (
                                                                    <Link to="/blog-details" key={i}>{item.title}</Link>
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