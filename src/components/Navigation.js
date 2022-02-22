import React from 'react';
import { NavLink } from "react-router-dom";
import '../static/css/navbar.css'

function Navigation(){
    return(
        <div className="header">

        <ul>
          <div className = "header1">
            <NavLink className="nav-button" to="/"><h1>DefiCalcs</h1></NavLink>
            <NavLink className="nav-button" to="/">Calculators</NavLink>
            <NavLink className="nav-button" to = "/about">About</NavLink>
          </div>
  
          
          <a target="_blank" href="https://www.patreon.com/tronschell">
            <div className = "patreon">
            Patreon
            </div>
          </a>
        </ul>
        </div>
    )
}

export default Navigation;