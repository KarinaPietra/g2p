import React, { Component } from 'react';
import axios from 'axios';
// import Map from './Map.js'
//new code
const Data = async () => {
  const url = 'https://www.refugerestrooms.org/api/v1/restrooms/search.json?';
  let new_york_locations = [];
  let miami_locations = [];
  let public_bathrooms = [];

  let nyProm = axios.get(url+'query=new%20york&per_page=100').then(({data: dataNy}) => {
    new_york_locations = dataNy.filter((location)=>{
      if (location.city === "New York"){
        return location
      }
    })
  })

  let miaProm = axios.get(url+'query=miami&per_page=100').then(({data: dataMia}) => {
    miami_locations = dataMia.filter((location) => {
      if (location.city === "Miami"){
        return location
      }
    })
  })

  let pubProm = axios.get(url+'query=public&per_page=50').then(({data: dataPub}) => {
    public_bathrooms = dataPub.map((location)=>{
      location.public = true

      return location
    })
  })

  return Promise.all([nyProm, miaProm, pubProm]).then(() => {
    return [...new_york_locations,...miami_locations,...public_bathrooms]
  });

}
export {Data}
