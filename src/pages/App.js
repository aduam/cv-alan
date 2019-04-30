import React, { Component } from 'react'

import './styles/App.css'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Knowledge from '../components/Knowledge';
import Language from '../components/Language';
import Footer from '../components/Footer';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <div className="App-container">
          <Hero />
          <Education />
          <Knowledge />
          <Language />
          <Experience />
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;