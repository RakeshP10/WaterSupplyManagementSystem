import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Media,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addToCart } from '../redux/CartAction';

class Shop extends Component {
    constructor(){
        super();

    }

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){

        const bottles = this.props.items.map((item) => {
            return (
                <div key={item.id} className="col-12  mt-5">
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
                            <Button onClick={()=>{this.handleClick(item.id)}} className="buttons" color="secondary">
                                Add to Cart
                            </Button>
                        </Media>
                    </Media>
                </div>
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
                    {bottles}   
                </div>
            </div>
            
        );
    }
   
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);