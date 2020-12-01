import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home' className="linkfooter">Home</Link></li>
                        <li><Link to='/aboutus' className="linkfooter">About Us</Link></li>
                        <li><Link to='/shop' className="linkfooter">Shop</Link></li>
                        <li><Link to='/contactus' className="linkfooter">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                            Pimpri Chinchwad College<br />
                            of Engineering,Akurdi<br />
                            Pune,Maharashtra<br />
                            <i className="fa fa-phone"></i>: +9999999999<br />
                            <i className="fa fa-fax"></i>: +1111111111<br />
                            <i className="fa fa-envelope"></i>: <a className="linkfooter" href="mailto:mail@gmail.com">mail@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-5 align-self-center ">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="http://gmail.com/"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Water Supply</p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Footer;