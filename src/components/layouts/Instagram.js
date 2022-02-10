import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import img1 from '../../assets/img/insta/insta1.jpg'
import img2 from '../../assets/img/insta/insta2.jpg'
import img3 from '../../assets/img/insta/insta3.jpg'
import img4 from '../../assets/img/insta/insta4.jpg'
import img5 from '../../assets/img/insta/insta5.jpg'
import img6 from '../../assets/img/insta/insta6.jpg'
import img7 from '../../assets/img/insta/insta7.jpg'
// install Swiper components
SwiperCore.use([Navigation]);

const instapost = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img6 },
]
class Instagram extends Component {
    render() {
        const settings = {
            slidesPerView: 2,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: false,
            breakpoints: {
                480: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 6,
                },
                1500: {
                    slidesPerView: 8,
                },
            }
        }
        return (
            <Swiper wrapperTag="ul" className="u-line instagram-slider swiper-container hm-list" {...settings}>
                {instapost.map((item, i) => (
                    <SwiperSlide tag="li" key={i}>
                        <Link to="#">
                            <img src={item.img} alt="instagram" />
                        </Link>
                        <div className="insta-icon">
                            <div>
                                <i className="fab fa-instagram text-red-light" />
                            </div>
                        </div>
                        {/* wrapperClass="hm-list hm-instagram" */}
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }
}

export default Instagram;