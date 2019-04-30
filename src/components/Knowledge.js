import React, { Component } from 'react'

import Title from './Title'
import './styles/Knowledge.css'

class Knowledge extends Component {
  state = {
    form: {
      lenguage: [
        { id: 1, name: "c++" },
        { id: 2, name: "Java" },
        { id: 3, name: "c#" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "PHP" },
        { id: 6, name: "NodeJs" },
        { id: 7, name: "Asp.Net" }
      ],
      sql: [
        { id: 1, name: "My-Sql" },
        { id: 2, name: "Sql Server" },
        { id: 3, name: "Oracle" },
        { id: 4, name: "MongoDB" }
      ],
      os: [
        { id: 1, name: "Linux Ubuntu" },
        { id: 2, name: "Widows" }
      ],
      frameworks: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "Express" },
        { id: 3, name: "Git, Git-Hub" },
        { id: 4, name: "Bootstrap" }
      ]
    }
  }
  render(){

    return(
      <div className="Knowledge" id="Knowledge">
        <Title title="Conocimientos" />
        <div className="Knowledge-container">
          <div className="Knowledge-languagesProg">
            <h4>Programation languages</h4>
            <ul>
              {this.state.form.lenguage.map( item => {
                return(
                  <li key={item.id}>{item.name}</li>
                )
              } )}
            </ul>
          </div>
          <div className="Knowledge-languagesSQL">
            <h4>Script query language</h4>
            <ul>
              {
                this.state.form.sql.map( item => {
                  return(
                    <li key={item.id}>{item.name}</li>
                  )
                } )
              }
            </ul>
          </div>
          <div className="Knowledge-os">
            <h4>Sistemas Operativos</h4>
            <ul>
            {
              this.state.form.os.map( os => {
                return(
                  <li key={ os.id }>{ os.name }</li>
                )
              })
            }
            </ul>
          </div>
          <div className="Knowledge-frameworks">
            <h4>Frameworks</h4>
            <ul>
              {
                this.state.form.frameworks.map( item => {
                  return (
                    <li key={ item.id }>{ item.name }</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Knowledge;