import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media , Button } from 'reactstrap';
import img1 from "../assets/man1.jpg";
import img2 from "../assets/man1.jpg";
import img3 from "../assets/man1.jpg";
import { Link } from 'react-router-dom';
import Footer from './FooterComponent';
import Navbar1 from './Navbar';
const Abc = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.discription}</p>
            </div>
            <a href="#" className="btn btn-outline-success">More Details</a>
        </div>
    );
}

class About extends Component{
    render(){

        return(
            <div>
            <Navbar1/>
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Our Agency</h3>
                    <hr />
                </div>                
            </div>
        
         <div className="row row-content">
                <div className="col-12 col-md-8">
                    <h2>Our History</h2>
                    <p>"Water Supply Management" is the application where customers can conveniently place orders of water requirements with traceability. The owner will be able to manage customer requests, grant orders as well as supply the water as per customers requirements with appropriate delivery schedules.</p>
                    <p>
                        We are developing a project on drinking water supply  in cities. The objective of Project is  to effectively manage the drinking water supply  to customers within cities.
                        We will be registering customers in our database to take their request and supply water accordingly as per requests and requirement.
                        As there is shortage of water in some of areas our application will be beneficial for customers to place order for water requirement.
                        Our application will be useful at family functions, schools and colleges as there will be water requirement . 
                        Our Web application will be accessed by three different users: Admin, Customer, Delivery Person.
                    </p>
                </div>
                <div className="col-12 col-md-3">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">1 Jun. 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Water Supply Management Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">10,00,000</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">4</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
     
            <div className="container-fluid d-flex justify-context-center">
                <div className="row">
                       <div className="col-12">
                            <h2>Details</h2>
                        </div>
                    <div className="col-md-4">
                        <Abc imgsrc={img1} title="Owner 1" discription="This is description 1"/>
                    </div>
            
                    <div className="col-md-4">
                        <Abc imgsrc={img2} title="Owner 2" discription="This is description 2"/>
                    </div>
            
                    <div className="col-md-4">
                        <Abc imgsrc={img3} title="Owner 3" discription="This is description 3"/>
                    </div>
                    
                </div>
            </div>
            </div>
            <Footer /> 
    </div>   
 
        );
           
    }
}
export default About;