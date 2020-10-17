import React from 'react';
import { Breadcrumb, BreadcrumbItem,Media,Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderList({item}){
    return (
            <div key={item.id} className="col-12 mt-5">
                <Media tag="li" className="media">
                    <Media left middle>
                        <Media object className="mediaimage" src={item.image} alt={item.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading className="mediaheading">{item.name}</Media>
                        <hr></hr>
                        <h6>{item.description}</h6>
                        <h6>{item.price}</h6>
                        <Button type="submit" className="buttons" color="success">
                            Buy
                        </Button>
                    </Media>
                </Media>
            </div>
      );
}

function MyCart(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>My Cart</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>My Cart</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderList item={props.item}  />
                </div>
            </div>
        </div>
    );
}
export default MyCart;