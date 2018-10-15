import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './marker.css'
import ReactDOMServer from 'react-dom/server'
import Popup from './Popup'
import axios from 'axios'
import {Data} from './Data.js'

class Map extends Component {
  async componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keXdlaXNzMTk4MiIsImEiOiJIeHpkYVBrIn0.3N03oecxx5TaQz7YLg2HqA'
    const mapOptions = {
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 12,
      center: [-80.2044, 25.8028]
    };
    const geolocationOptions = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000
    };
    await this.createMap(mapOptions, geolocationOptions)
  }

  createMap = (mapOptions, geolocationOptions) => {
    this.map = new mapboxgl.Map(mapOptions);
    const map = this.map;

    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken
    //   })
    // );

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    map.on('load', (event) => {
      Data().then(e => this.fetchPlaces(e))
      // this.fetchPlaces(Data());
    })
  }

  fetchPlaces = (loc) => {
    // this.state.location;
    const map = this.map;
    const self= this;
    loc.forEach((location, i) => {
      let elm = document.createElement('div')
      elm.className = "mapbox-marker"
      let popup = new mapboxgl.Popup({ offset: 25})
      .setHTML(ReactDOMServer.renderToStaticMarkup(
        <Popup location={location}></Popup>
      ))
      let marker = new mapboxgl.Marker(elm)
      .setLngLat([location.longitude, location.latitude])
      .setPopup(popup)
      marker.addTo(map)
      console.log(marker);
    })
  }

  render() {
    const style = {
      width: '100%',
      height: '500px',
      backgroundColor: 'azure'
    };
    return (
      <div style={style} ref={el => this.mapContainer = el} />
    )
  }
}


export default Map