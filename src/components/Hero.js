import React, { Component } from 'react'

import './styles/Hero.css'
import Foto from '../assets/images/foto-perfil.jpg'
import Data from './Data'

class Hero extends Component {
  render(){
    return(
      <div className="Hero" id="Hero">
        <div className="Hero-container">
          <div className="Hero-foto">
            <img src={Foto} alt="foto-Alan" />
            <div className="Hero-position">
              <h3>Developer <span>JavaScript</span> <br />
               full-stack <br /> 
               with <span>ReactJs</span> <br /> 
              and <span>NodeJs</span> </h3>
            </div>
          </div>
          <Data />
        </div>
      </div>
    )
  }
}
export default Hero;