import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Bestseller from '../home/Bestseller';
import Campaigns from '../hometwo/Campaign';
import Advertise from '../homethree/Advertise';
import Hotdeals from './Hotdeals';
import Latestproduct from '../../layouts/Latestproduct';
import Newsletter from '../../layouts/Newsletterone';
import Advertisement from './Advertisement';
import Community from './Community';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Bestseller />
                <Advertise />
                <Hotdeals />
                <Campaigns />
                <Advertisement />
                {/* <section className="section-padding our-product bg-theme-primary">
                    <Latestproduct />
                </section> */}
                <Community />
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;