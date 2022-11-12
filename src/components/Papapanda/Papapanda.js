import "./Papapanda.css"
import React/*, { useState}*/ from "react";
import { papapandaData } from '../../data/papapandaData';
import sombra from "../../assets/svg/papapanda/sombra.svg"
const PpImg = () => {
    
    
    
   /* const [r, setR] = useState(0);
    const click = () => {
        
        const i = Math.floor(Math.random()*papapandaData.length);
        setR(i);
     };*/
    
    return (
        
        <div className="container">
        <div className='wrapper'>
            <div className='papa-wrapper'>
                <div  className="papapanda">
                    
                    <img 
                    key={papapandaData.id}
                    src={papapandaData[0].img}
                    alt=""
                    />
                </div>
                <div className="ssombra">
                    <img
                    src={sombra}
                    alt=""
                    />
                </div>
                
                
                
            </div>
            <br></br>
            <h3 /*onClick={click}*/> {papapandaData[0].text}</h3>
        </div>
        </div>
    );
};

export default PpImg ;
