import React, { Component, Fragment } from 'react';
import Testimonials from '../../layouts/Testimonials';
import Blogpost from '../../layouts/Blogpost';
import Newsletter from '../../layouts/Newslettertwo';
import Process from './Process';
import Abouttext from './Abouttext';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext/>
                <Process/>
                <Testimonials />
                <Blogpost />
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;