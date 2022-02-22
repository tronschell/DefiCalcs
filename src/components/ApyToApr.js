import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { CgArrowsExchange } from 'react-icons/cg';
import "../static/css/apytoapr.css"

function ApyToApr(){

    const [Apy, setApy] = useState()
    const [CompoundingInterval, setCompoundingInterval] = useState()
    const [Show, setShow] = useState(false)


    return(
        <>
        
        <div className="main">
            <div className = "apy-apr-calc-background">
                <div className="name">
                    <h1>APY to APR</h1>
                    <NavLink to="/AprToApy"><button><CgArrowsExchange size="20" color="white"/></button></NavLink>
                </div>
                <div className='section'>
                    <p>APY (%)</p>
                    <input autoComplete='off' inputMode='decimal' value={Apy} name="Apy" placeholder='0.00' onChange={e => setApy(e.target.value)} />
                </div>

                <div className='section'>
                    <p>Compounding Interval</p>
                    <input autoComplete='off' inputMode='decimal' value={CompoundingInterval} name="Compounding Interval" placeholder="0" onChange={e => setCompoundingInterval(e.target.value)} />
                </div>

                <button onClick={()=> setShow(true)} className='apy-apr-submit'>Submit</button>
                {
                    Show?<p>APR = {Math.round(100*(((1+parseFloat(Apy*0.01))**(1/parseInt(CompoundingInterval))-1)*CompoundingInterval)*100)/100}%</p>:null
                }
                
            </div>
        </div>

        </>
    )
}
export default ApyToApr;