import React, { Component } from 'react'
import './card.css'
export default class card extends Component {
  render() {
      const {data}=this.props;
    return (data.map((x)=>
        <div key={x.name} className="cardwrapper">
        <div className="card">
        <h4 className="title">{x.Title}</h4>
        <img src={x.Images[0]}/>
        {/* <h3>Movie--{x.name}</h3>
        <h4>Brand--{x.brand}</h4>
        <h5>Langauge--{x.language}</h5> */}
        </div>
      </div>
    
    ))
  }
}
