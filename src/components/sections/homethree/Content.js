import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Candidates from '../home/Candidates';
import Ourproduct from '../home/Ourproduct';
import Campaign from './Campaign';
import Donation from './Donation';
import Latestproduct from '../../layouts/Latestproduct';
import Testimonials from '../../layouts/Testimonials';
import Newsletter from '../../layouts/Newslettertwo';
import Video from './Video';
import Hotdeals from './Hotdeals';
import Advertise from './Advertise';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Candidates />
                {/* <section className="section-padding our-product">
                    <Latestproduct />
                </section> */}
                <Video />
                <Hotdeals />
                <Ourproduct />
                <Advertise />
                <Donation />
                <Campaign />
                <Testimonials />
                <Blogpost />
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;