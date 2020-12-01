import React, { Component,useState } from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import Footer from './FooterComponent';
import Navbar1 from './Navbar';
import Axios from "axios";

function Contact(){
	
	
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [telnum, setTelnum] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
    

    
const feedback = () => {

        alert('Thank You for Your Valuable Feedback');
		
		Axios.post("http://localhost:3001/user/contactus", {
		  firstname: firstname,
		  lastname: lastname,
		  telnum: telnum,
		  email: email,
		  message : message,
		}).then((response) => {
		  console.log(response);
		});
  };
   
     return(
         <div>
             <Navbar1/>
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>              
            </div>
        
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                         <address>
                            Pimpri Chinchwad College<br />
                            of Engineering,Akurdi<br />
                            Pune,Maharashtra<br />
                            <i className="fa fa-phone"></i>: +9999999999<br />
                            <i className="fa fa-fax"></i>: +1111111111<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                            </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
         

         
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
    
                    <LocalForm>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                             <input
								  type="text"
								  placeholder="First Name"
								  onChange={(event) => {setFirstname(event.target.value);
								  }}
							/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={2}>Last Name</Label>
                        <Col md={10}>
							<input
							  type="text"
							  placeholder="Last Name"
							  onChange={(event) => {setLastname(event.target.value);
							  }}
							/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                        <Col md={10}>
							<input
							  type="text"
							  placeholder="Tel. Number"
							  onChange={(event) => {setTelnum(event.target.value);
							  }}
							/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
							<input
							  type="text"
							  placeholder="Email"
							  onChange={(event) => {setEmail(event.target.value);
							  }}
							/>
                        </Col>
                    </Row>
                    
   
                    <Row className="form-group">
                        <Col md={{size: 6, offset: 2}}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".agree" name="agree"
                                        className="form-check-input"
                                            /> {' '}
                                        <strong>May we contact you?</strong>
                                </Label>
                            </div>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Control.select model=".contactType" name="contactType"
                                className="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
						 <input
					  	type="text"
					  	placeholder="Discription"
					  	onChange={(event) => {setMessage(event.target.value);
					  }}
					/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset: 2}}>
                            <Button onClick={feedback}> Send Feedback</Button>
							
                        </Col>
                    </Row>
                </LocalForm>
                
            </div>
        </div>
         

         </div>
         <Footer/>
        </div>
         

         
    );   
    
    
    
    
}

export default Contact;