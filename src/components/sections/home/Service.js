import React, { Component } from 'react';

const servicetypeposts = [
    { parentclass: "bg-custom-1 border-custom-right border-sm-bottom", img: "assets/img/help.svg", title: "Participate", subtitle: "As a Volunteers" },
    { parentclass: "bg-custom-2 border-custom-right border-sm-bottom", img: "assets/img/money.svg", title: "Be a Hand", subtitle: "As a Donor" },
    { parentclass: "bg-custom-3 border-custom-right border-sm-bottom", img: "assets/img/investor.svg", title: "Participate", subtitle: "As a Voter" },
    { parentclass: "bg-custom-4", img: "assets/img/cash.svg", title: "Be a Part", subtitle: "In our Mission" },
];

class Service extends Component {
    render() {
        return (
            <section className="service-type">
                <div className="row">
                    {servicetypeposts.map((item, i) => (
                        <div key={i} className={"col-lg-3 col-md-6 "+ item.parentclass +""}>
                            <div className="service-box">
                                <div className="service-box-wrapper">
                                    <div className="service-icon-box">
                                        <img src={item.img} alt="" className="img-fluid" />
                                    </div>
                                    <div className="service-text-box">
                                        <p>{item.title}</p>
                                        <h6>{item.subtitle}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Service;