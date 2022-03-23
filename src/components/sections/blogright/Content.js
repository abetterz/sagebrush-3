// import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import Newsletter from '../../layouts/Newsletterone';
// import Pagination from '../../layouts/Pagination';
// import Sidebar from '../../layouts/Blogsidebar';
// import blogpost from '../../../data/blog/blogpost.json';

// class Content extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <section className="our-articles bg-light-theme section-padding ">
//                     <div className="container-fluid custom-container">
//                         <div className="row">
//                             <div className="col-xl-9 col-lg-8 mb-md-40">
//                                 <div className="full-width">
//                                     <div className="row">
//                                         {blogpost.map((item, i) => (
//                                             <div key={i} className="col-xl-4 col-lg-6 col-md-6">
//                                                 <article className="blog-item blog-item-box">
//                                                     <img className="blog-img" src={item.img} alt="img" style={{ height: 'auto', zIndex: 1 }} />
//                                                     <div className="blog-item-img">
//                                                         <img className="blog-img" src={item.img} alt="img" style={{ display: 'none' }} />
//                                                         <ul className="blog-item-badge" style={{ display: 'none' }}>
//                                                             {item.tags.slice(0, 2).map((tag, i) => (
//                                                                 <li key={i}><Link to="/blog-details">{tag.name}</Link> </li>
//                                                             ))}
//                                                         </ul>
//                                                     </div>
//                                                     <div className="blog-item-content" style={{ display: 'none' }}>
//                                                         <h5 className="blog-item-title"><Link to="/blog-details">{item.title}</Link></h5>
//                                                         <p>{item.text}</p>
//                                                         <div className="blog-item-details">
//                                                             <span className="blog-item-date">
//                                                                 <i className="fas fa-calendar-week" /> {item.postdate}
//                                                             </span>
//                                                             <span><i className="fas fa-comment-dots" /> {item.commentcount}</span>
//                                                         </div>
//                                                     </div>
//                                                 </article>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 {/* <Pagination /> */}
//                             </div>                     
//                             <aside className="col-xl-3 col-lg-4">
//                                 <Sidebar />
//                             </aside>
//                         </div>
//                     </div>
//                 </section>

//                 <Newsletter />
//             </Fragment>
//         );
//     }
// }

// export default Content;


















import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newsletterone';
import Pagination from '../../layouts/Pagination';
import Sidebar from '../../layouts/Blogsidebar';
import blogpost from '../../../data/blog/blogpost.json';



// const hasNoText = () => {
// <h5 className="blog-item-title"><a href={item.link}>{item.title}</a></h5>
// }

// const hasText = () => {
// return <h5 className="blog-item-title"><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h5>
// }

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="our-articles bg-light-theme section-padding ">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 mb-md-40">
                                <div className="full-width">
                                    <div className="row">
                                        {blogpost.map((item, i) => (
                                            <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                                                <article className="blog-item blog-item-box">
                                                    {/* <img className="blog-img" src={item.img} alt="img" style={{ height: 'auto', zIndex: 1 }} /> */}
                                                    <div className="blog-item-img">
                                                        <img className="blog-img" src={item.img} alt="img"  />
                                                        <ul className="blog-item-badge" style={{display: "none"}} >
                                                            {item.tags.slice(0, 2).map((tag, i) => (
                                                                <li key={i}><Link to="/blog-details">{tag.name}</Link> </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="blog-item-content" >
                                                        {
                                                             item.text ? <h5 className="blog-item-title"><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h5> : <h5 className="blog-item-title"><a href={item.link}>{item.title}</a></h5>
                                                        }
                                                        {/* <p>{item.text}</p> */}
                                                        <div className="blog-item-details">
                                                            <span className="blog-item-date">
                                                                <i className="fas fa-calendar-week" /> {item.postdate}
                                                            </span>
                                                            <span><i className="fa fa-user" /> {item.author}</span>
                                                            {/* <span><i className="fas fa-comment-dots" /> {item.commentcount}</span> */}
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* <Pagination /> */}
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