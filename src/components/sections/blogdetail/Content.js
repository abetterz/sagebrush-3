import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newsletterone';
import Sidebar from '../../layouts/Blogsidebar';
import tags from '../../../data/blog/tags.json';
import comment from '../../../data/blog/comments.json';

import details from '../../../assets/img/blog/details.jpg';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="our-articles bg-light-theme section-padding ">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                <div className="main-box padding-20 full-width mb-md-40">
                                    <div className="post-wrapper mb-xl-20">
                                        <div className="blog-item-img">
                                            <img src={details} className="img-fluid full-width" alt="#" />
                                            <ul className="blog-item-badge" style={{ display: 'none' }}>
                                                <li><Link to="/blog-details">Water</Link> </li>
                                                <li><Link to="/blog-details">Health</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="blog-meta mb-xl-20">
                                                <h3 className="blog-title text-light-black">Best Democratic Party in Brooklyn.</h3>
                                                <div className="blog-meta-author">
                                                    <p className="text-light-white mb-0 fs-14">
                                                        <span className="mr-3">
                                                            <img src={process.env.PUBLIC_URL + "/assets/img/blog/user1.jpg"} alt="" />
                                                        </span>
                                                        <div>
                                                            <Link to="/blog-details"> Admin</Link>
                                                            <Link to="/blog-details"> 25 January, 2022</Link>
                                                        </div>
                                                    </p>
                                                </div>
                                                <p className="text-light-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Why do we choose it?</h6>
                                                <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Where does it come from?</h6>
                                                <p className="text-light-white mb-xl-20">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                                <p className="text-light-white">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                            </div>
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Where can I get that product?</h6>
                                                <p className="text-light-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            </div>
                                            <div className="blog-meta mb-xl-20">
                                                <h6 className="blog-title text-light-black">Why do we order from there?</h6>
                                                <p className="text-light-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
                                                                    <Link to="/blog-details" key={i}>{item.title}</Link>
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
}

export default Content;