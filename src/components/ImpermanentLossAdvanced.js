import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { CgArrowsExchange } from 'react-icons/cg';
import "../static/css/impermanentlossadvanced.css"

function ImpermanentLossAdvanced(){

    const [priceAsset1, setPriceAsset1] = useState()
    const [priceAsset1After, setPriceAsset1After] = useState()
    const [priceAsset2, setPriceAsset2] = useState()
    const [priceAsset2After, setPriceAsset2After] = useState()
    const [Show, setShow] = useState(false)


    const handleInput = () => {
        
        let changex = ((priceAsset1After - priceAsset1)/priceAsset1)+1
        let changey = ((priceAsset2After - priceAsset2)/priceAsset2)+1


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
                    <NavLink to="/ImpermanentLoss"><button><CgArrowsExchange size="20" color="white"></CgArrowsExchange></button></NavLink>
                
                </div>
                <div className='section'>
                    <p>Price of Asset 1</p>
                    <input autoComplete='off' inputMode='decimal' value={priceAsset1} name="priceAsset1" placeholder='$0.00' onChange={e => setPriceAsset1(e.target.value)} />
                    
                    <p>Price of Asset 1 (Future)</p>
                    <input autoComplete='off' inputMode='decimal' value={priceAsset1After} name="priceAsset1After" placeholder='$0.00' onChange={e => setPriceAsset1After(e.target.value)} />

                </div>

                <div className='section'>
                <p>Price of Asset 2</p>
                    <input autoComplete='off' inputMode='decimal' value={priceAsset2} name="priceAsset2" placeholder='$0.00' onChange={e => setPriceAsset2(e.target.value)} />
                    
                    <p>Price of Asset 2 (Future)</p>
                    <input autoComplete='off' inputMode='decimal' value={priceAsset2After} name="priceAsset2After" placeholder='$0.00' onChange={e => setPriceAsset2After(e.target.value)} />
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
export default ImpermanentLossAdvanced;