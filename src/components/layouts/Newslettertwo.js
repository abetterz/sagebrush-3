import React, { Component } from 'react';

class Newslettertwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            res: ''
        }
        this.updateEmail = this.updateEmail.bind(this);
    }
    updateEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleClick = () => {
        console.log(this.state.email);
        fetch('https://public-health-backend.herokuapp.com/api/members/subscribe_sagebrush/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: '',
                email: this.state.email,
            })
        })
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    res: "Success!",
                });
            })
    }
    render() {
        return (
            <section className="section-padding block_newsletter bg-theme-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left text-center">
                                <h3 className="text-light-black header-title">Grab Our Newsletter</h3>
                                <p>To receive latest offers and discounts from the shop. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="subscribe-wrapper">
                                <div id="subscribe-form" >
                                    <div className="subscribe-content">
                                        <input type="text" name="subscribe-input" id="subscribe-input" value={this.state.email} onChange={this.updateEmail} placeholder="Enter Your Email Address" className="form-control input-text required-entry validate-email" />
                                        <button className="button" onClick={this.handleClick}><span>Subscribe</span></button>
                                        <p className='result text-center'>{this.state.res}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Newslettertwo;