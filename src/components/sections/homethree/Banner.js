import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../../assets/img/banner/banner1.jpg';
class Banner extends Component {
    render() {
        return (
            <section className="p-relative single-banner">
                <img src={banner} className="img-fluid full-width" alt="banner" />
                <div className="transform-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 align-self-center">
                                <div className="right-side-content text-center">
                                    <h5 className="text-white">Around the world.</h5>
                                    <h1 className="text-white fw-600 fs-60">Help Us Make A Diffrence In This World</h1>
                                    <p className="text-white fw-400">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish
              shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfishf</p>
                                    <Link to="/about" className="btn-solid with-line btn-big mt-20"><span>Explore<i className="fas fa-caret-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay overlay-bg-dark-2" />
            </section>
        );
    }
}

export default Banner;