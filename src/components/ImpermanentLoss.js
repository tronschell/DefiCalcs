import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { BsThreeDots } from 'react-icons/bs';
import "../static/css/impermanentloss.css"

function ImpermanentLoss(){

    const [change2, setChange2] = useState()
    const [change1, setChange1] = useState()
    const [Show, setShow] = useState(false)


    const handleInput = () => {
        let changex = (change1/100)+1;
        let changey = (change2/100)+1;
        let valuePool = ((parseFloat(changex)**(50/100)))*((parseFloat(changey)**(50/100)))
        let heldValue = ((parseFloat(changex)*50)/100) + ((parseFloat(changey)*50)/100)
        let il = ((valuePool/heldValue)-1)*100;
        console.log(valuePool);
        console.log(heldValue);
        console.log(il);
        return(Math.abs(Math.round(il*100)/100))
    }

    return(
        <>
        
        <div className="main">
            <div className = "calc-background">
                <div className="name">
                    <h1>Impermanent Loss</h1>
                    <NavLink to="/ImpermanentLossAdvanced"><button><BsThreeDots size="20" color="white"></BsThreeDots></button></NavLink>
                
                </div>
                <div className='section'>
                    <p>% Change of Asset 1</p>
                    <input autoComplete='off' inputMode='decimal' value={change1} name="Change1" placeholder='0.00' onChange={e => setChange1(e.target.value)} />
                </div>

                <div className='section'>
                    <p> % Change of Asset 2</p>
                    <input autoComplete='off' inputMode='decimal' value={change2} name="Change2" placeholder="0.00" onChange={e => setChange2(e.target.value)} />
                </div>

                <button onClick={()=> setShow(true)} className='submit'>Submit</button>
                {
                    Show?<p>Impermanent Loss = {handleInput()}%</p>:null
                }
            </div>
        </div>

        </>
    )
}
export default ImpermanentLoss;