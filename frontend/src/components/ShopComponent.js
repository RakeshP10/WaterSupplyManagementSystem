import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Media,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import {bottles} from '../shared/bottles';

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
                        <p className="mediabody">{item.description}</p>
                        <p className="mediabody"><b>Price:</b>{item.price}</p>
                        <Button className="buttons" color="success">
                            Buy
                        </Button>
                        <Button className="buttons" color="secondary">
                            Add to Cart
                        </Button>
                    </Media>
                </Media>
            </div>
      );
}

class Shop extends Component {
    constructor(){
        super();

        this.state={
            Bottles:bottles
        }
    }

    render(){

        const bottles = this.state.Bottles.map((bottle) => {
            return (
                    <RenderList item={bottle} />
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shop</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Shop</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        {bottles}   
                    </div>
                </div>
            </div>
            
        );
    }
   
}
export default Shop;