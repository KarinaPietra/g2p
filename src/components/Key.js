
import React, { Component } from 'react';
import {Link, Route, BrowseRouter} from 'react-router-dom'

// import css2 from './marker.css'
// import css from '../App.css'


const privateBathroom = "https://i.pinimg.com/originals/bb/f0/34/bbf034d7ffd43b195cd15ceacedfeb5b.png";
const publicBathroom = "https://i.ebayimg.com/images/g/JDUAAOSwo4pYjSJw/s-l300.jpg";
const privImg = <img className="pic-size" src={privateBathroom} alt="icon" />
const pubImg = <img className="pic-size" src={publicBathroom} alt= "icon" />


export default class Key extends Component {
  render() {
    return(
      <div className="key">
        <ol className="list">
          <li className="bold"> Need a bathroom now?</li>
          <li className="steps"> Follow the steps to find the nearest one!</li>
          <li> On the map click on the following icons: </li>
          <li>
          {privImg} : business bathrooms
          </li>
          <li>
          {pubImg} : public bathrooms
          </li>
          <li className="users">
            Join the fun:
            <Link to="/users">Submit a Review</Link>
          </li>
        </ol>


    </div>
  )
  }

}




// const key = (
//   <div>
//     <p> 'Need a bathroom now?'</p>
//     <p> 'Follow the steps to find the nearest one!'</p>
//     <p>
//       `{privImg} : business bathrooms`
//     </p>
//     <p>
//     `{pubImg} : public bathrooms`
//     </p>
//   </div>
// )
//
// ReactDOM.render(key, document.getElementById('legend'));
