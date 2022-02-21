import React from 'react';
import { SiDiscord, SiTwitter } from 'react-icons/si'
import { NavLink } from "react-router-dom";
import "../static/css/home.css"


function Home(){
    return(
        <>
        <div className='main-background'>
          <div className="hero">
                <h1>An aggregator for all Defi Calculators.</h1>

                <div className='icons'>
                  <SiDiscord size="28"/>
                  <SiTwitter size="28"/>
                </div>
            </div>
          
            <div className="calc-cards">
              <div className='card'>
                <h2>APR to APY</h2>
                <p> 
                  Convert from APR to APY and vice versa. </p>
                <NavLink className="nav-button" to="/AprToApy"><div className='header3'>Enter</div></NavLink>
              </div>
              <div className='card'>
                <h2>Defi 2.0</h2>
                <p>Coming Soon. Rebase protocols like Olympus DAO, Time Wonderland, etc.</p>
                <a href="#"><div className='header3'>Enter</div></a>

              </div>
              <div className='card'>
                <h2>Impermanent Loss</h2>
                <p> Coming Soon. Calculate impermanent loss from liquidity pool farming.</p>
                <NavLink className="nav-button" to="/ImpermanentLoss"><div className='header3'>Enter</div></NavLink>
              </div>

            </div>
        </div>
        </>
    )
}
 
export default Home;