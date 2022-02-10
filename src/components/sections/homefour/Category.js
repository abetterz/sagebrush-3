import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const categoryposts = [
    {img:"assets/img/categories/adv1.jpg",title:"Bracelets",description:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod",btntext:"Shop Now"},
    {img:"assets/img/categories/adv2.jpg",title:"Rings",description:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod",btntext:"Shop Now"},
    {img:"assets/img/categories/adv3.jpg",title:"Earrings",description:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod",btntext:"Shop Now"},
    {img:"assets/img/categories/adv4.jpg",title:"Bracelets",description:"Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod",btntext:"Shop Now"}
  ];
class Category extends Component {
    render() {
        return (
            <section className="list-adv2">
                <div className="row">
                    {categoryposts.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="item-adv2 category-block fade-out-in">
                            <Link to="/shop-detail" className="adv-thumb-link">
                                <img src={item.img} alt="" />
                            </Link>
                            <div className="banner-info text-center">
                                <h3 className="text-white title30 play-font font-italic">{item.title}</h3>
                                <p className="desc text-white opaci">{item.description}</p>
                                <Link to="/shop-detail" className="btn btn-text btn-text-white">shop now</Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Category;