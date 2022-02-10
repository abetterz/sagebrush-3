import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import candidatelist from '../../../data/candidatelist.json'

// install Swiper components
SwiperCore.use([Navigation]);

class Candidates extends Component {
    render() {
        const settings = {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: false,
            breakpoints: {
                576: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 5,
                },
            }
        }
        return (
            <section className="browse-cat bg-theme-primary section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title">Our Candidates List </h3>
                                <span className="fs-16 align-self-center"><Link to="#">See All</Link></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <Swiper className="category-slider swiper-container" {...settings} navigation>
                                {candidatelist.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <Link to="/story-grid" className="categories">
                                            <div className="icon text-custom-white bg-light-green ">
                                                <img src={item.img} className="rounded-circle" alt="categories" />
                                            </div> <span className="text-light-black cat-name">{item.title}</span>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Candidates;