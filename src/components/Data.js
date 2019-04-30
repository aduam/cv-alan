import React, { Component } from 'react'

import Title from './Title'
import './styles/Data.css'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import instagram from '../assets/images/instagram.png'


class Data extends Component {
  state = {
    form: {
      title: 'Datos Personales',
      nombre: 'Alan Jackson Duarte Marroquín',
      fNacimiento: '25 de Enero de 1,991',
      email: 'alanduam@gmail.com',
      ubicacion1: 'San Jose Pinula, Guatemala',
      ubicacion2: 'Zona 18, Guatemala',
      facebook: '',
      instagram: '',
      linkedIn: '',
      twitter: '',
    }
  }
  render(){
    return(
      <div className="Data" id="Data">
        <div className="Data-container">
          <Title title={this.state.form.title} />
          <div className="Data-datos">
            <div>
              <p>Nombre: </p>
              <p>F. Nacimiento:</p>
              <p>E-Mail:</p>
              <p>Ubicación 1:</p>
              <p>Ubicación 2:</p>
            </div>
            <div className="Data-informacion">
              <p>{this.state.form.nombre}</p>
              <p>{this.state.form.fNacimiento}</p>
              <p>{this.state.form.email}</p>
              <p>{this.state.form.ubicacion1}</p>
              <p>{this.state.form.ubicacion2}</p>
            </div>
          </div>
            <div className="Data-redes">
              <a href="https://www.facebook.com/alan.duarte.560" target="_blank"><img src={facebook} alt="facebook"/></a>
              <a href="https://www.instagram.com/alan.duartem/" target="_blank"><img src={instagram} alt="instagram"/></a>
              <a href="https://www.linkedin.com/in/alan-duarte-514959158/" target="_blank"><img src={linkedin} alt="linkedin"/></a>
              <a href="https://twitter.com/AlanDuarte5" target="_blank"><img src={twitter} alt="twitter"/></a>
            </div> 
        </div>
      </div>
    )
  }
}

export default Data;