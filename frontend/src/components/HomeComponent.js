import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HomeComponent.css';
import img1 from "../assets/select.png";
import img2 from "../assets/order.png";
import img3 from "../assets/delivered.jpg";
import img4 from "../assets/savetime.jpg";
import Navbar1 from './Navbar';
import Footer from './FooterComponent';
const HomeImg = props =>{
   return(
       <div className="card text-center">
           <div className="overflow">
               <img src={props.imgsrc} alt="image1" className="card-img-top"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{props.title}</h4>
               <p className="card-text text-secondary">{props.discription}</p>
           </div>
       </div>
   );
}

function Home(props) {
    return(
      <>
      <Navbar1/>
        <div className="home-container">
              <h1>Welcome to our Website</h1>
              <div className='home-btns'>
                  <a href='#middle'>
                  <Button className="btns" buttonStyle='btn--primary'  buttonSize='btn--large'>
                     GET STARTED
                  </Button>
                  </a>

                  <Link to='/shop'>
                  <Button className="btns" buttonStyle='btn--primary1' buttonSize='btn--large'>
                     BOOK A CAN
                  </Button>    
                  </Link>         
               </div> 
        </div> 
  
      <div id="section-header">
         <h2 class="dark-text" id="middle">How It Works</h2>
         <div class="section-legend">Getting pure &amp; hygiene water has never been so easy for man kind!</div>
      </div>  

      <div className="container-fluid d-flex justify-context-center">
                <div className="row">
                    <div className="col-md-3">
                        <HomeImg imgsrc={img1} title="STEP 1: SELECT" discription="Select water can"  />
                    </div>
            
                    <div className="col-md-3">
                        <HomeImg imgsrc={img2} title="STEP 2: ORDER" discription="Place the order with payment options."/>
                    </div>
            
                    <div className="col-md-3">
                        <HomeImg imgsrc={img3} title="STEP 3: DELIVERED" discription="Water delivered at your door step"/>
                    </div>

                    <div className="col-md-3">
                        <HomeImg imgsrc={img4} title="Save Time" discription="Buy online to save your time and money."/>
                    </div>                    
                    
                </div>
            </div> 
         <Footer/>       
      </>     
    );
}
export default Home;