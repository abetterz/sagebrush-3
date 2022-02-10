import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';

const shoptop = [
    { img: 'assets/img/shop/slider-1.jpg', sale: true },
    { img: 'assets/img/shop/slider-2.jpg', sale: true },
    { img: 'assets/img/shop/slider-3.jpg', sale: true },
    { img: 'assets/img/shop/slider-4.jpg', sale: true },
    { img: 'assets/img/shop/slider-5.jpg', sale: true },
];
const shopbottom = [
    { img: 'assets/img/shop/slider-thumb-1.jpg' },
    { img: 'assets/img/shop/slider-thumb-2.jpg' },
    { img: 'assets/img/shop/slider-thumb-3.jpg' },
    { img: 'assets/img/shop/slider-thumb-4.jpg' },
    { img: 'assets/img/shop/slider-thumb-5.jpg' },
];

SwiperCore.use([Thumbs]);

const Slider = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const settings = {
        spaceBetween: 15,
        loop: true
    };
    const settingsthumb = {
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    }
    return (
        <div className="detail-slider">
            <Swiper className="swiper-container gallery-top" {...settings} navigation thumbs={{ swiper: thumbsSwiper }}>
                {shoptop.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Link to="#" className="popup">
                            <img src={item.img} className="img-fluid full-width" alt="slider" />
                        </Link>
                        {
                            item.sale === true ? <div className="shop-type-tag">
                                <Link to="#" className="bg-custom-black type-tag">Sale</Link>
                            </div> : ''
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper className="swiper-container gallery-thumbs " {...settingsthumb} onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress>
                {shopbottom.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item.img} className="img-fluid full-width" alt="slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;