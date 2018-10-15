import React, { Component } from 'react';
import axios from 'axios';
// import Map from './Map.js'
//new code
export const Data = () => {
  let new_york_locations = []
  return axios.get('https://www.refugerestrooms.org/api/v1/restrooms/search.json?query=new%20york&per_page=100')
  .then((response) => {
    const data = response.data
     new_york_locations = data.map((location)=>{
      if (location.city === "New York"){
        return location
        // return {latitude: location.latitude, longitude: location.longitude, city: location.city, name: location.name}
      }
      else{
        return null
      }
    })
    new_york_locations = new_york_locations.filter((el) =>   !!el )
    return new_york_locations
  })
  .catch(function (error) {
    console.log(error);
  });
}
export default Data
