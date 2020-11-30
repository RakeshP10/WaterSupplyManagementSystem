import React, { useState, useEffect } from 'react';
import {Navbar,Nav,NavItem} from 'reactstrap';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavbarUser() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
      <Navbar className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Water Supply
            <i class='fab fa-typo3' />
          </NavLink>
		  
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <Nav navbar className={click ? 'nav-menu active' : 'nav-menu'}>            
                            <NavItem className="nav-item">
                                <NavLink className="nav-link"  to='/userhome' onClick={closeMobileMenu}><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link" to='/useraboutus' onClick={closeMobileMenu}><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link"  to='/usershop' onClick={closeMobileMenu}><span className="fa fa-list fa-lg"></span> Shop</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link" to='/usermycart' onClick={closeMobileMenu}><span className="fa fa-shopping-cart fa-lg"></span> My Cart</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-link" to='/usercontactus' onClick={closeMobileMenu}><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>

                            <NavItem className="nav-item">
                              {button ? (
                                <NavLink className="nav-link" to='/profile'>
                                <Button primary >My Profile</Button>
                                </NavLink>
                              ): (
                                <NavLink to='/userhome'>
                                  <Button onClick={closeMobileMenu} primary>
                                    My Profile
                                  </Button>
                                </NavLink>
                              )}
                            </NavItem>                            
                                                
                        </Nav>

                    </div>
                
      </Navbar>
  );
}

export default NavbarUser;