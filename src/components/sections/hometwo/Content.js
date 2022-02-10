import React, { Component, Fragment } from 'react';
import About from './About';
import Banner from './Banner';
import Bestseller from '../home/Bestseller';
import Advertisement from './Advertisement';
import Community from './Community';
import Latestproduct from '../../layouts/Latestproduct';
import Advertise from '../../layouts/Advertisement';
import Testimonials from '../../layouts/Testimonials';
import Newsletter from '../../layouts/Newslettertwo';
import Blogpost from '../../layouts/Blogpost';
import Donation from './Donation';
import Campaign from './Campaign';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <About />
                <Bestseller />
                <Advertisement />
                <Community />
                <section className="section-padding our-product">
                    <Latestproduct />
                </section>
                <Advertise/>
                <Donation/>
                <Campaign/>
                <Testimonials/>
                <Blogpost/>
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;