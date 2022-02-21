import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { CgArrowsExchange } from 'react-icons/cg';
import "../static/css/impermanentloss.css"

function ImpermanentLoss(){

    const [Apr, setApr] = useState()
    const [CompoundingInterval, setCompoundingInterval] = useState()
    const [Show, setShow] = useState(false)


    return(
        <>
        
        <div className="main">
            <div className = "calc-background">
                <div className="name">
                    <h1>Impermanent Loss</h1>
                    <NavLink to="/ApyToApr"><button><CgArrowsExchange size="20" color="white"/></button></NavLink>
                </div>
                <div className='section'>
                    <p>APR (%)</p>
                    <input autoComplete='off' inputMode='decimal' value={Apr} name="APR" placeholder='0.00' onChange={e => setApr(e.target.value)} />
                </div>

                <div className='section'>
                    <p>Compounding Interval</p>
                    <input autoComplete='off' inputMode='decimal' value={CompoundingInterval} name="Compounding Interval" placeholder="0" onChange={e => setCompoundingInterval(e.target.value)} />
                </div>

                <button onClick={()=> setShow(true)} className='submit'>Submit</button>
                {
                    Show?<p>APY = {Math.round(100*((1+parseFloat(Apr*0.01)/parseInt(CompoundingInterval))**(parseInt(CompoundingInterval))-1)*100)/100}%</p>:null
                }
                
            </div>
        </div>

        </>
    )
}
export default ImpermanentLoss;