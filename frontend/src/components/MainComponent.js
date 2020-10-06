import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import MyCart from './MyCartComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' component={About} /> 
                    <Route exact path='/mycart' component={MyCart} /> 
                    <Route exact path='/contactus' component={Contact} /> 
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
           
        );
    }
}

export default Main;