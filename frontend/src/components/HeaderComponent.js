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
              <NavbarBrand className="mr-auto" href="/"><img src='logo512.png' height="30" width="41" alt='Water Supply Agency' /></NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                      <NavItem>
                          <NavLink className="nav-link"  to='/home'> Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link" to='/aboutus'> About Us</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link"  to='/mycart'> My Cart</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link" to='/contactus'> Contact Us</NavLink>
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