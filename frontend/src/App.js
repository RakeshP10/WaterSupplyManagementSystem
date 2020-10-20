import React,{Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CartReducer from './redux/CartReducer';

const store = createStore(CartReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
