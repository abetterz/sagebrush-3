import React, { Fragment } from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';

class Content extends Contacthelper {
    render() {
        return (
            <Fragment>
                <div className="contact_map">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988966845!2d-74.25986771844386!3d40.697670067927376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1629696871317!5m2!1sen!2sin" className="border-0 w-100" style={{ height: '100%', minHeight: '500px' }} allowFullScreen />
                </div>
                <section className="section-padding">
                    <div className="container">
                        <div className="section-header-style-2">
                            <h6 className="text-light-green sub-title">Contact Form</h6>
                            <h3 className="text-light-black header-title">Get In Touch</h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={this.handleSubmit} method="GET">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="text-light-black fw-600">Full Name</label>
                                                <input type="text" name="name" value={this.state.name} onChange={this.onNameChange} className="form-control form-control-submit" placeholder="Full Name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="text-light-black fw-600">Email I'd</label>
                                                <input type="email" name="email" value={this.state.email} onChange={this.onEmailChange} className="form-control form-control-submit" placeholder="Email I'd" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="text-light-black fw-600">Phone No.</label>
                                                <input type="text" name="phone" value={this.state.phone} onChange={this.onPhoneChange} className="form-control form-control-submit" placeholder="Phone No." required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="text-light-black fw-600">Subject</label>
                                                <input type="text" name="subject" value={this.state.subject} onChange={this.onSubjectChange} className="form-control form-control-submit" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="text-light-black fw-600">Message</label>
                                                <textarea className="form-control form-control-submit" name="message" value={this.state.message} onChange={this.onMessageChange} rows={6} placeholder="Write Message" required />
                                            </div>
                                            <ReCAPTCHA
                                                sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                                                onChange={this.reCaptchaLoaded.bind(this)}
                                                size="invisible"
                                            />
                                            <button type="submit" className="btn-second btn-submit full-width">Submit</button>
                                            {/* Form Messages */}
                                            <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                                <strong>Success!</strong> Contact form has been successfully submitted.
                                            </Alert>
                                            <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                                <strong>Oops!</strong> Something bad happened. Please try again later.
                                            </Alert>
                                            {/* Form Messages */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Content;