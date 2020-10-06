import React,{Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Water Supply Agency</NavbarBrand>
            </div>
          </Navbar>
          <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
