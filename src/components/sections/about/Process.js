import React, { Component } from 'react';

const processposts = [
    { number: "01", icon: "assets/img/how1.png", title: "Search", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.", arrowclass: "arrow-1" },
    { number: "02", icon: "assets/img/how2.png", title: "Select", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.", arrowclass: "arrow-2" },
    { number: "03", icon: "assets/img/how3.png", title: "Order", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.", arrowclass: "arrow-1" },
    { number: "04", icon: "assets/img/how4.png", title: "Enjoy", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut." }
];

class Process extends Component {
    render() {
        return (
            <section className="section-padding how-it-works bg-theme-primary">
                <div className="container">
                    <div className="section-header-style-2">
                        <h6 className="text-light-green sub-title">Our Process</h6>
                        <h3 className="text-light-black header-title">How Does It Work</h3>
                    </div>
                    <div className="row">
                        {processposts.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6">
                                <div className={"how-it-works-box " + item.arrowclass + ""}>
                                    <div className="how-it-works-box-inner"> <span className="icon-box">
                                        <img src={item.icon} alt="icon" />
                                        <span className="number-box">{item.number}</span>
                                    </span>
                                        <h6>{item.title}</h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Process;