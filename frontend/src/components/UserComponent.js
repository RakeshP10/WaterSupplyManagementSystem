import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import './Navbar.css';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import NavbarUser from './NavbarUser';
import Axios from "axios";
function UserView() {

 

  return (
    <div>
        <NavbarUser/>
           
        <Footer/>
      </div>
  );
}


export default UserView;
