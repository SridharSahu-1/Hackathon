import React from "react";
import { Link } from "react-router-dom";
import Signout from "../Signout";

function Home(props) {
  return (
    <div>
      <div>
        <div className="heading">Welcome To Login Page</div>
          <Link to="/login">Login</Link>
        <br />
          <Link to="/signup">Signup</Link>
      </div>
      <br/>
      <button onClick={Signout}>SignOut</button>
      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      <h2>{props.email ? `Welcome - ${props.email}` : "Not Loggedin"}</h2>
    </div>
  );
}

export default Home;
