import React, { Component } from 'react';
import Navbar1 from './Navbar';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import MyCart from './MyCartComponent';
import Shop from './ShopComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Navbar1/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' component={About} /> 
                    <Route exact path='/shop' component={Shop} /> 
                    <Route exact path='/mycart' component={MyCart} /> 
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />  
                    <Redirect to="/home" />
                </Switch>
                
                <Footer />
            </div>
           
        );
    }
}

export default Main;