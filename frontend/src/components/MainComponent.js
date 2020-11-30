import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import MyCart from './MyCartComponent';
import Shop from './ShopComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import UserView from './UserComponent';
import Profile from './Profile';
import Checkout from './CheckoutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/aboutus' component={About} /> 
                    <Route exact path='/shop' component={Shop} /> 
                    <Route exact path='/mycart' component={MyCart} />
                    <Route exact path='/checkout' component={Checkout} /> 
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />   
                    <Route exact path='/userhome' component={Home} />
                    <Route exact path='/useraboutus' component={About} /> 
                    <Route exact path='/usershop' component={Shop} /> 
                    <Route exact path='/usermycart' component={MyCart} /> 
                    <Route exact path='/usercontactus' component={Contact} /> 
                    <Route exact path='/userview' component={UserView} /> 
                    <Route exact path='/profile' component={Profile} />
                    <Redirect to="/home" />
                </Switch>
                
                
            </div>
           
        );
    }
}

export default Main;