import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


function App() {    
  return (
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
  </BrowserRouter>
  );
}

export default App;
