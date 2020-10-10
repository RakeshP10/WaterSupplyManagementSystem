import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
      <div>
        <Navbar dark expand="md">
          <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/"><img src='images/icon.png' height="50" width="50" alt='Water Supply' /></NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                      <NavItem>
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link"  to='/shop'><span className="fa fa-shopping-bag fa-lg"></span> Shop</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link"  to='/mycart'><span className="fa fa-shopping-cart fa-lg"></span> My Cart</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                      </NavItem>
                  </Nav>
              </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Water Supply</h1>
                        <p>Some Caption for the website here</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
       </div>
    );
  }
}

export default Header;