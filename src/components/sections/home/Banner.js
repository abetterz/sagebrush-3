import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

const sliderposts = [
    { img: "assets/img/banner/banner1.jpg", subtitle: "Around the world.", title: "We help all", titlespan: "people", titlespanafter: "in need", description: "Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish", btn1: "Explore", btn2: "Shop Now" },
    { img: "assets/img/banner/banner2.jpg", subtitle: "Around the world.", title: "Our Helping", titlespan: "people", titlespanafter: "in need", description: "Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish", btn1: "Shop Now", btn2: "Learn More" },
    { img: "assets/img/banner/banner3.jpg", subtitle: "Around the world.", title: "Our Helping", titlespan: "people", titlespanafter: "in need", description: "Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish", btn1: "Learn More", btn2: "Shop Now" }
];
// install Swiper components
SwiperCore.use([Navigation]);

class Banner extends Component {
    render() {
        const settings = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            speed: 3500,
            grabCursor: true,
            watchSlidesProgress: true,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true
        }
        return (
            <Swiper tag="section" className="about-us-slider swiper-container p-relative slider-banner-1" {...settings} navigation>
                {sliderposts.map((item, i) => (
                    <SwiperSlide key={i} className="slide-item">
                        <img src={item.img} className="img-fluid full-width" alt="banner" />
                        <div className="transform-center z-index-3">
                            <div className="container-fluid custom-container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 align-self-center">
                                        <div className="left-side-content">
                                            <h5 className="text-white">{item.subtitle}</h5>
                                            <h1 className="text-white fw-600">{item.title} <span className="text-custom-pink">{item.titlespan}</span> {item.titlespanafter}</h1>
                                            <p className="text-white fw-400">{item.description}</p>
                                            <Link to="/about" className="btn-solid with-line btn-big mt-20 mr-1" style={{ display: "none" }}><span>{item.btn1} <i className="fas fa-caret-right" /></span></Link>
                                            <Link to="/shop-left" className="border-butn mt-20 ml-1"><span>{item.btn2}</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overlay overlay-bg-dark overlay-bg-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default Banner;