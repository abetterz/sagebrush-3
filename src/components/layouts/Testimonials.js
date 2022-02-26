import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

const testimonials = [
    { img: "assets/img/testimonial/testimonial1-teddy.jpg", text: "Here is your country. Cherish these natural wonders, cherish the natural resources, cherish the history and romance as a sacred heritage, for your children and your children's children. Do not let selfish men or greedy interests skin your country of its beautry, its riches or its romance.", name: "Theodore Roosevelt", designation: "President" },
    { img: "assets/img/testimonial/Abe.jpg", text: "Those who deny freedom to others, deserve it not for themselves; and, under a just God, can not long retain it.", name: "Abraham Lincoln", designation: "President" }
];
// install Swiper components
SwiperCore.use([Navigation]);

class Testimonials extends Component {
    render() {
        const settings = {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            speed: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
        }
        return (
            <section className="feedback-area-two section-padding bg-custom-primary">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left text-center">
                                <h3 className="text-white header-title">Our Community</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper className="feedback-slider p-relative swiper-container" {...settings} navigation>
                                {testimonials.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="feedback-item-two">
                                            <img src={item.img} alt="Feedback" />
                                            <p className="text-white fs-16">{item.text}</p>
                                            <h5 className="text-white fw-600 no-margin">{item.name}</h5>
                                            {/* <span className="text-white fw-400">{item.designation}</span> */}
                                        </div>
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

export default Testimonials;