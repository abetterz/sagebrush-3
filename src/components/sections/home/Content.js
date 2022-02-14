import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Bestseller from './Bestseller';
import Candidates from './Candidates';
import Community from './Community';
import Masonarygallery from './Masonarygallery';
import Ourproduct from './Ourproduct';
import Service from './Service';
import Advertisement from '../../layouts/Advertisement';
import Testimonials from '../../layouts/Testimonials';
import Blogpost from '../../layouts/Blogpost';
import Newsletter from '../../layouts/Newslettertwo';
import Donation from './Donation';
import Campaigns from './Campaigns';
import Paravideo from './Paravideo';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Service />
                <Candidates />
                <Bestseller />
                <Masonarygallery />
                <Community />
                {/* <Ourproduct/> */}
                <Advertisement />
                <Donation />
                <Campaigns />
                <Testimonials />
                <Blogpost />
                <Paravideo />
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;