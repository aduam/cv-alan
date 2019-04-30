import React, { Component } from 'react'

import Title from './Title'
import './styles/Experience.css'

class Experience extends Component {
  render(){
    return(
      <div className="Experience" id="Experience">
        <Title title="Experiencia" />
        <div className="Experience-container">
          <div className="Experience-label">
            <p>He hecho proyectos universitarios con el stack PHP-MySql en el Backend y Html5-Css3-JS-JQuery</p>
            <p>He trabajado en varios proyectos pequeños como frontend en el 2018 tanto con Vanilla JS como con ReactJs</p>
            <p>He aportado como Backend con NodeJs y MongoDB como creación de API Rest</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Experience;