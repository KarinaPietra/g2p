import React, { Component } from 'react';
import axios from 'axios';
// import Map from './Map.js'
//new code
export const Data = async () => {
  let new_york_locations = []
  let miami_locations = []
  let nyReq = await axios.get('https://www.refugerestrooms.org/api/v1/restrooms/search.json?query=new%20york&per_page=100')
  let miaReq = await axios.get('https://www.refugerestrooms.org/api/v1/restrooms/search.json?query=miami&per_page=100')
  // .then((response) => {
  const dataNy = nyReq.data
  const dataMia = miaReq.data
  new_york_locations = dataNy.map((location)=>{
    if (location.city === "New York"){
      return location
      // return {latitude: location.latitude, longitude: location.longitude, city: location.city, name: location.name}
    }
    else{
      return null
    }
  })

  new_york_locations = new_york_locations.filter((el) =>   !!el )

  miami_locations = dataMia.map((location)=>{
    if (location.city === "Miami"){
      return location
      // return {latitude: location.latitude, longitude: location.longitude, city: location.city, name: location.name}
    }
    else{
      return null
    }
  })

  miami_locations = miami_locations.filter((el) =>   !!el )

  return [...new_york_locations,...miami_locations]

}


export default Data
