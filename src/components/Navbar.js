import React, { Component } from 'react'

import './styles/Navbar.css'

class Navbar extends Component {
  render(){
    return(
      <div className="Navbar">
        <div className="Navbar-container">
          <div className="Navbar-home"><a href={"#"}>Jackson</a></div>
          <div className="Navbar-menu">
            <ul>
              <li><a href={"#Hero"}>Datos Personales</a></li>
              <li><a href={"#Education"}>Formación Academica</a></li>
              <li><a href={"#Experience"}>Experiencia Profesional</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;