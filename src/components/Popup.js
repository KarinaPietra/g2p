import React, { Component } from 'react'

export default class Popup extends Component {

  render() {
    let info = this.props.location
    return (
      <div>
        <p>{info.name}</p>
        <p>{info.comment}</p>
        <p>{info.directions}</p>
        <p>{info.street}</p>
        <p>{info.unisex}</p>
      </div>
    )
  }
}
