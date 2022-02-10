import React, { Component, Fragment } from 'react';
import Shoprelated from '../../layouts/Shoprelated';
import Newsletter from '../../layouts/Newsletterone';
import Detail from './Detail';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Detail/>
                <Shoprelated/>
                <Newsletter/>
            </Fragment>
        );
    }
}

export default Content;