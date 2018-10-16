import React, { Component } from 'react'
import css from '../index.css'

export default class Popup extends Component {

  render() {
    let info = this.props.location
    return (
      <div className= "prop-box">
        <p id="name">{info.name}</p>
        <p id="street">{info.street}</p>
        <p id="directions">{info.directions}</p>
        <p id="comment"> {info.comment}</p>
        <p id="unisex">{info.unisex}</p>
      </div>
    )
  }
}
