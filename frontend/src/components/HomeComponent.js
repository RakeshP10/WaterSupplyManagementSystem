import React from 'react';
import {Button} from './Button'
import {Link} from 'react-router-dom';
import './HomeComponent.css'
function Home(props) {
    return(
      <>
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

      <div class="container">
         <div class="row-content">
            <div class="col-12">
            <h3>STEP 1: SELECT</h3>
               <p>Select water can</p>
            </div>
            <div class="col-12">
            <h3>STEP 2: ORDER</h3>
               <p>Select water can</p>
            </div>
            <div class="col-12">
            <h3>STEP 3: DELIVERED</h3>
               <p>Select water can</p>
         </div>
         </div>
      </div>          
      </>     
    );
}
export default Home;