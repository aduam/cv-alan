import React, { Component } from 'react'

import Title from './Title'
import './styles/Language.css'

class Language extends Component {
  render(){
    return(
      <div className="Language" id="Language">
        <Title title="Idiomas" />
        <div className="Language-container">
          <div className="Language-label">
            <p>Español: </p>
            <p>English: </p>
          </div>  
          <div className="Language-item">
            <p>Nativo</p>
            <p>9 courses of 12, i consider myself with 40%</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Language;