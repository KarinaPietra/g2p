import React, { Component } from 'react';
// import {Link, Route, BrowseRouter} from 'react-router-dom'

export default class Users extends Component{
  render(){
    return(
      <div className= "superhero">
          <div class="center">
            <h1 id="logo">G|2|P</h1>
          </div>
      <div className="main">
      <div className= "full-form">
        <form>
          <label className= "name-response">
            Submit your response:
            <div>
            Please list location address and review.
            </div>
          </label>
          <input className= "box-size" type="textarea" placeholder="Please Begin Typing"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <form className = "sign-up">
          <div className="move">
          <label className="member" >
            Become a Member &#63;
          </label>
          </div>
          <div className="input">
            <div>
            <label>username:</label>
            <input className= "username" type="textarea" placeholder="username"/>
            <input type="submit" value="Submit" />
            </div>
            <div>
            <label>password:</label>
            <input className= "password" type="password" placeholder="password"/>
            <input type="submit" value="Submit" />
            </div>
          </div>
            <div className="user-button">
              <input type="submit" value="Login" />
              <input type="submit" value="Sign Up" />
            </div>


        </form>
      </div>
    </div>
  </div>
    )
  }
};

// export default const route = () => (
//   <Router>
//     <div>
//       <p>
//         <Link to="/users">Submit a Review</Link>
//       </p>
//
//       <Route exact path="/users" component={Users}/>
//     </div>
//   </Router>
// );
//


// <li className="users">
//   Join the fun:
//   <a href="/users">Submit a Review</a>
// </li>
