import React from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel'
import { render } from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Carousel />
    </div>
  );
}

export default App;
