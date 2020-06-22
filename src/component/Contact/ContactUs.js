import React from 'react';
import './Contact.css';

function Contact() {
    return(
        <div className="con">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Road<br />
                        Clear Water Bay, Kajdk<br />
                        India<br />
                        <hr />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:asdjamhad@gmail.com">asdjamhad@gmail.com</a>
                        <hr />
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.771009995386!2d80.2336907!3d12.9914929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24ef264085e6a094!2sIndian%20Institute%20of%20Technology%20Madras!5e0!3m2!1sen!2sin!4v1592682469739!5m2!1sen!2sin" 
                        style={{width:"600", height:"450", frameborder:"5" ,border:"0", allowfullscreen:"", ariahidden:"false", tabindex:"0"}}></iframe> 
                    <hr/>
                    <br />
                </div>
                
                <div className="col-12 col-sm-10 offset-sm-1">
                    <br/>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+846463535"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mkhiyugug@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Contact;

