import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class About extends Component {
    render() {
        return (
            <section className="about-section-style-1">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="full-height">
                            <img src="assets/img/home-mission-statement.jpg" alt="img" className="img-fluid full-width full-height" />
                        </div>
                    </div>
                    <div className="col-lg-6 bg-custom-primary">
                        <div className="about-section-container">
                            <div className="section-header-left pb-0">
                                <h3 className="header-title text-white mb-20">Mission Statement</h3>
                                <p className="text-white">
                                    America’s ruling class has sold out our country, trampled our rights, and doesn’t know how to
                                    govern. Both Democrats and Republicans are to blame. As did the pioneers who settled this
                                    country and made it great, we are a group of citizens who have decided to act. They created a
                                    new world—we intend to revive it.
                                </p>
                                <p className="text-white">
                                    We need a new generation of leaders who believe in America’s manifest destiny, who worship
                                    God and not politics, and who understand that sovereignty, property rights, and patriotic
                                    capitalism are the key pillars of our freedom and property. Therefore, Sagebrush Rebellion
                                    seeks to elect representatives who commit to pioneering policy that will secure America’s food
                                    supply and farm land, decentralize the federal bureaucracy’s hold on the American interior,
                                    confront aggression from the Chinese Communist Party at home and abroad, and restore
                                    American innovation and economic sovereignty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;