import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem,Button,Media } from 'reactstrap';
import { Link } from 'react-router-dom';


class MyCart extends Component {
    render(){
        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return( 
                <div key={item.id} className="col-12  mb-5">
                    <Media tag="li" className="cartmedia">
                        <Media left middle>
                            <Media object className="cartmediaimage" src={item.image} alt={item.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading className="cartmediaheading">{item.name}</Media>
                            <hr></hr>
                            <p className="cartmediabody">{item.description}</p>
                            <p className="cartmediabody"><b>Price:</b>{item.price}</p>
                        </Media>
                    </Media>
                </div>
                )
            })
        ):

        (
        <div>
            <Media className="cartmedia col-12 offset-11  mb-5">
                <Media body>
                <Media heading className="cartmediaheading">Your Cart is Empty</Media>
                    <Link to='/shop'>
                        <div className="text-center m-5">
                        <Button className="center ml-12" color="danger">
                            Shop Now
                        </Button>
                        </div>
                    </Link>
                </Media>
            </Media>
            
        </div>
        )

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
                    {addedItems}
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(MyCart);