import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem,Button, Row, Col, Label,Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Checkout extends Component{
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleSubmit(values) {
        console.log('Your Order is placed');
        alert('Your Order is placed');
      
    }

    render(){
        
            let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                    <li>     
                    <div key={item.id} className="col-12  mb-5">
                        <Media tag="li" className="cartmedia">
                            <Media body className="ml-5">
                                <p className="cartmediabody">{item.name}</p>
                                <pre className="cartmediabody">
                                    <b>Price:<i class="fa fa-inr"></i></b>{item.price}    
                                    <hr></hr>
                                    <b>Quantity:</b> {item.quantity} 
                                </pre>
                            </Media>
                        </Media>
                    </div>
                    </li>
                    )
                })
            ):
    
            (
            <div></div>
            )
    
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/mycart">My Cart</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Checkout</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Order Summary</h3>
                            <hr />
                        </div>                
                    </div>
                    
                    <div className="row">
                        <ul>
                        {addedItems}
                        </ul>
                        <hr></hr>
                        <h3><b>Total:Rs {this.props.total}</b></h3>
                    </div>
                    
    
                    <div className="row">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                             
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Phone Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                 <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="address" md={2}>Payment Option</Label>        
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".paymentType" name="paymentType"
                                        className="form-control">
                                        <option>Cash on Delivery</option>
                                        <option>Internet Banking</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address" md={2}>Your Home Address</Label>
                                <Col md={10}>
                                    <Control.textarea model=".address" id="address" name="address"
                                        rows="5"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <div>
                            <Button className="buttons" color="danger" onClick={this.handleSubmit}>Place Order</Button>
                            </div>
                            
                        </LocalForm>
                        
                    </div>
                     
                </div>
            );
    }
    
    
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Checkout);