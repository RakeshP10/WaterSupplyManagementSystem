import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Media,Button, Navbar} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addToCart } from '../redux/CartAction';
import Footer from './FooterComponent';
import Navbar1 from './Navbar';
class Shop extends Component {
    constructor(){
        super();

    }
    handleClick = (id)=>{
        alert('Item Added to your Cart');
        this.props.addToCart(id); 
    }

    render(){
        let bottles = this.props.items.map((item) => {
            return (
                <div key={item.id} className="col-12  mt-2 mb-2">
                    <Media tag="li" className="media">
                        <Media left middle>
                            <Media object className="mediaimage" src={item.image} alt={item.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading className="mediaheading">{item.name}</Media>
                            <hr></hr>
                            <p className="mediabody">{item.description}</p>
                            <p className="mediabody"><b>Price:</b>{item.price}</p>
                            <Link to='/checkout'>
                            <Button className="buttons" color="success" onClick={()=>{this.handleClick(item.id)}}>
                                Buy
                            </Button>
                            </Link>
                            <Button onClick={()=>{this.handleClick(item.id)}} className="buttons" color="secondary">
                                Add to Cart
                            </Button>
                        </Media>
                    </Media>
                </div>
          );
        });

        return(
            <div>
                <Navbar1/>
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
                <div div className="row">
                    {bottles}   
                </div>
            </div>
            <Footer/>
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