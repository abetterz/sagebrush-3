import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Category from './Category';
import Latestproduct from './Latestproduct';
import Advertise from '../homethree/Advertise';
import Campaign from './Campaign';
import Advertisement from '../../layouts/Advertisement';
import Ourproduct from '../../layouts/Latestproduct';
import Newsletter from '../../layouts/Newslettertwo';
import Donation from './Donation';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Category/>
                <Latestproduct/>
                <Advertise/>
                <Campaign/>
                <Advertisement/>
                <Donation/>
                <section className="section-padding our-product bg-theme-primary">
                    <Ourproduct/>
                </section>
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;