import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../../layouts/Newslettertwo';

const wishlistposts = [
    {
        img: "assets/img/shop/product5.jpg",
        productname: "Diamond Exclusive Ornament",
        price: 295.00,
        stock: true
    },
    {
        img: "assets/img/shop/product2.jpg",
        productname: "Perfect Diamond Jewellery",
        price: 275.00,
        stock: true
    },
    {
        img: "assets/img/shop/product3.jpg",
        productname: "Handmade Golden Necklace",
        price: 295.00,
        stock: false
    },
    {
        img: "assets/img/shop/product4.jpg",
        productname: "Diamond Exclusive Ornament",
        price: 110.00,
        stock: true
    }
];

class Content extends Component {
    render() {
        return (
            <Fragment>
                <section className="compare-page-wrapper bg-light-white section-padding">
                    {/* compare main wrapper start */}
                    <div className="container">
                        <div className="section-bg-color">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* Wishlist Table Area */}
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="pro-remove">Remove</th>
                                                    <th className="pro-thumbnail">Thumbnail</th>
                                                    <th className="pro-title">Product</th>
                                                    <th className="pro-price">Price</th>
                                                    <th className="pro-quantity">Stock Status</th>
                                                    <th className="pro-subtotal">Add to Cart</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishlistposts.map((item, i) => (
                                                    <tr key={i}>
                                                        <td className="pro-remove"><Link to="#"><i className="pe-7s-trash" /></Link></td>
                                                        <td className="pro-thumbnail"><Link to="#"><img className="img-fluid" src={item.img} alt="Product" /></Link></td>
                                                        <td className="pro-title"><Link to="#">{item.productname}</Link></td>
                                                        <td className="pro-price"><span>${item.price}</span></td>
                                                        <td className="pro-quantity">
                                                            {
                                                                item.stock === true ? <span className="text-success">In Stock</span> : <span className="text-danger">Stock Out</span>
                                                            }
                                                        </td>
                                                        <td className="pro-subtotal">
                                                            {
                                                                item.stock === true ? <Link to="#" className="btn btn-solid">Add to Cart</Link> : <Link to="#" className="btn btn-solid disabled">Add to Cart</Link>
                                                            }
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* compare main wrapper end */}
                </section>
                <Newsletter />
            </Fragment>
        );
    }
}

export default Content;