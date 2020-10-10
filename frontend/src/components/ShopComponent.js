import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Shop extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shop</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Select your Order</h3>
                        <hr />
                    </div>                
                </div>
            </div>
        );
    } 
}
export default Shop;