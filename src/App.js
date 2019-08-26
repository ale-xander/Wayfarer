import React from 'react'
import NavBar from './components/Landing/NavBar'
import Carousel from './components/Landing/Carousel'
import PopularCities from './components/Landing/PopularCities'
import Register from './components/Landing/Register'
import { render } from 'react-dom'



import './App.css'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Carousel />
      <PopularCities />
      <Register />
     
    </div>
  )
}

export default App
