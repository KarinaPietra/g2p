import React, { Component } from 'react';
import axios from 'axios';
class Data extends Component{
  constructor(){
    super();
    this.state = { location:[]}
  }

componentDidMount() {
  axios.get('https://www.refugerestrooms.org/api/v1/restrooms/search.json?query=new%20york&per_page=100')
  .then(function (response) {
    const data = response.data
    let new_york_locations = data.map((location)=>{
      if (location.city === "New York"){
        return {latitude: location.latitude, longitude: location.longitude, city: location.city}
      }
      else{
        return null
      }
    })
    new_york_locations = new_york_locations.filter(function(el) { return el; });
    console.log(new_york_locations)
  })
  .catch(function (error) {
    console.log(error);
  });
}
render(){
  return (
    <ul>
    {this.state.location.map(location =>
      <li>
        {/* // {specify what we want the list to be} */}
      </li>
    )}
    </ul>
    )
  }
}
export default Data
