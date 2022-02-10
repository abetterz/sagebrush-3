import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recentpost from '../../data/shop/recentpost.json';
import brand from '../../data/shop/brand.json';
import weight from '../../data/shop/weight.json';
import tags from '../../data/shop/tags.json';
import categories from '../../data/shop/categories.json';
import Slider from 'react-rangeslider'

class Shopsidebar extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 1000
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        const { value } = this.state
        const valuelabels = {
            50: '$ 50',
            250: '$ 250',
            500: '$ 500',
            1000: '$ 1000'
        }
        return (
            <div className="side-bar mb-md-40">
                <div className="main-box padding-20 side-shop mb-xl-20">
                    <h5 className="text-light-black">Top Products</h5>
                    {recentpost.slice(0, 4).map((item, i) => (
                        <article key={i} className="side-post pb-xl-20 mb-xl-20 u-line">
                            <div className="thumb-img">
                                <Link to="/shop-details">
                                    <img src={item.img} alt="thumb-img" />
                                </Link>
                            </div>
                            <div className="content-wrap">
                                <div className="entry-meta-content">
                                    <h6 className="entry-title">
                                        <Link to="/shop-details" className="text-light-black">{item.title}</Link>
                                    </h6>
                                    <div className="entry-tye"> <span className="text-color-primary fs-18 fw-600">${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Price</h5>
                    <div className="delivery-slider">
                        <div className='slider'>
                            <Slider
                                min={50}
                                max={1000}
                                step={250}
                                labels={valuelabels}
                                value={value}
                                onChange={this.handleChange}
                            />
                            <div className='value pb-3'></div>
                        </div>
                    </div>
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Brands</h5>
                    <div className="filter">
                        <form>
                            {brand.map((item, i) => (
                                <label key={i} className="custom-checkbox">
                                    <input type="checkbox" name="#" /> <span className="checkmark" /> {item.title} <span className="text-light-white">({item.count})</span>
                                </label>
                            ))}
                        </form>
                    </div>
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Weight</h5>
                    <div className="filter">
                        <form>
                            {weight.map((item, i) => (
                                <label key={i} className="custom-radio">
                                    <input type="radio" name="#" /> <span className="radio" /> {item.title}
                                </label>
                            ))}
                        </form>
                    </div>
                </div>
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h5 className="text-light-black">Tags</h5>
                    {tags.map((item, i) => (
                        <Link to="/shop-details" key={i}>#{item.title}</Link>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Categories</h5>
                    <ul>
                        {categories.map((item, i) => (
                            <li key={i} className="pb-xl-20 u-line mb-xl-20">
                                <Link to="/shop-details" className="text-light-black fw-600">{item.name} <span className="text-light-white fw-400">({item.count})</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Shopsidebar;