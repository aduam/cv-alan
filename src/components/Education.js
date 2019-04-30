import React, { Component } from 'react'

import Title from './Title'
import '../components/styles/Education.css'

class Education extends Component {
  state = {
    from: {
      title: 'Formación Academica',
      universidad: "Mariano Gálvez de Guatemala",
      carrera: "Ingeniería en sistemas",
      cursos: "36/50",
      actualmente: "Estudiando el séptimo semestre",
    }
  }
  render(){
    return(
      <div className="Education" id="Education">
        <Title title={this.state.from.title} />
        <div className="Education-container">
          <div className="Education-label">
            <p>Universidad:</p>
            <p>Carrera</p>
            <p>Cursos aprobados: </p>
            <p>Actualmente: </p>
          </div>
          <div className="Education-items">
            <p>{this.state.from.universidad}</p>
            <p>{this.state.from.carrera}</p>
            <p>{this.state.from.cursos}</p>
            <p>{this.state.from.actualmente}</p>
          </div>  
        </div>
      </div>
    )
  }
}
export default Education;