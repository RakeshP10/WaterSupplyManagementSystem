import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem,Button,Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../redux/CartAction';

class MyCart extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

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
                            <pre className="cartmediabody">
                                <b>Price:<i class="fa fa-inr"></i></b>{item.price}    
                                <b>Quantity:</b> {item.quantity}
                                <div class="btn-group-vertical">
                                <Button  onClick={()=>{this.handleAddQuantity(item.id)}}><i class="fa fa-caret-up"></i></Button>
                                <Button  onClick={()=>{this.handleSubtractQuantity(item.id)}}><i class="fa fa-caret-down"></i></Button>
                                </div>  
                            </pre>
                            <Link to='/checkout'>
                                <Button className="buttons" color="success" to='/checkout'>Buy Now</Button>
                            </Link>
                            <Button className="buttons" color="danger" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button>
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
                
                <div className="row">       
                    <h3><b>Total:Rs {this.props.total}</b></h3>
                </div>
                <div>
                    <Link to='/checkout'>
                    <Button className="buttons" color="success" >Checkout</Button>
                    </Link>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyCart);