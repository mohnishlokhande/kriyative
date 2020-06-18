import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="col-12">
                <div className="row justify-content-center">             
                    <div className="col-12 offset-sm-1 col-sm-3">
                        <h5 style={{textAlign: "justify"}}>Links</h5>
                        <ul className="list-unstyled">
                            <li style={{textAlign: "justify"}}><Link to="/pathways">Learning Pathways</Link></li>
                            <li style={{textAlign: "justify"}}><Link to="/metho">KRIYA Methodology</Link></li>
                            <li style={{textAlign: "justify"}}><Link to="/about">About Us</Link></li>
                            <li style={{textAlign: "justify"}}><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 offset-sm-1 col-sm-3">
                        <h5 style={{textAlign: "justify"}}>Our Address</h5>
                        <address style={{textAlign: "justify"}}>
                        26, Ghagj GJhbhb<br />
                        Vfafdvzs<br />
                        India<br />
                        <i className="fa fa-phone fa-lg"></i>: +3132165654<br />
                        <i className="fa fa-fax fa-lg"></i>: +511223131<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mohnishlokhande14@gmail.com">
                            mohnishlokhande14@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2018 KRIYATIVE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;