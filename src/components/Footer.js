import React, { Component } from 'react'

import './styles/footer.css'

class Footer extends Component {
  render(){
    return(
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-home"><a href="">Alan Developer</a></div>
          <div className="Footer-menu">
            <ul>
              <li><a href="https://www.facebook.com/alan.duarte.560" target="_blank">Facebook</a></li>
              <li><a href="https://www.linkedin.com/in/alan-duarte-514959158/" target="_blank">LinkedIn</a></li>
              <li><a href="https://twitter.com/AlanDuarte5" target="_blank">Twitter</a></li>
              <li><a href="https://www.instagram.com/alan.duartem/" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;