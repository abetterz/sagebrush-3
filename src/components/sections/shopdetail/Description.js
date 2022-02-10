import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import comments from '../../../data/shop/Comment.json'

class Description extends Component {
    render() {
        return (
            <div className="shop-detail-description-sec">
                <div className="tabs">
                    <Tab.Container defaultActiveKey="description">
                        <Nav variant="tabs" className="nav nav-tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="description" className="fw-600">Description</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="reviews" className="fw-600">Reviews (4)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="description">
                                <p className=" mb-xl-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncusp</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="reviews">
                                <div className="comment-box p-relative">
                                    <div id="comment-box">
                                        <ul className="comments">
                                            {comments.map((item, i) => (
                                                <li key={i} className="comment">
                                                    <article>
                                                        <div className="comment-avatar ">
                                                            <img src={item.img} className="rounded-circle" alt="comment" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="comment-meta">
                                                                <div className="comment-meta-header">
                                                                    <h6 className="text-color-secondary fw-500 author mb-1 fs-16">{item.title}</h6>
                                                                    <div className="post-date">
                                                                        <div className="date bg-custom-black">{item.date}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-meta-reply"> <Link to="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</Link>
                                                                </div>
                                                            </div>
                                                            <div className="comment">
                                                                <p>{item.comment}</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    {item.replies.map((reply, i) => (
                                                        <ul key={i} className="children">
                                                            <li className="comment">
                                                                <article>
                                                                    <div className="comment-avatar">
                                                                        <img src={reply.img} className="rounded-circle" alt="comment" />
                                                                    </div>
                                                                    <div className="comment-content ">
                                                                        <div className="comment-meta">
                                                                            <div className="comment-meta-header">
                                                                                <h6 className="text-color-secondary fw-500 author mb-1 fs-16">{reply.title}</h6>
                                                                                <div className="post-date">
                                                                                    <div className="date bg-custom-black ">{reply.date}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="comment-meta-reply"> <Link to="#" className="comment-reply-link btn-first red-btn text-custom-black">Reply</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment">
                                                                            <p>{reply.comment}</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        </ul>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        );
    }
}

export default Description;