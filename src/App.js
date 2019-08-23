import React from 'react';
import NavBar from './components/Landing/NavBar';
import Carousel from './components/Landing/Carousel';
import PopularCities from './components/Landing/PopularCities'
import { render } from "react-dom";



import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Carousel />
     <PopularCities />
    </div>
  );
}

export default App;
