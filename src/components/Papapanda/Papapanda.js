import "./Papapanda.css"
import React, { useState} from "react";
import { papapandaData } from '../../data/papapandaData';
import sombra from "../../assets/svg/papapanda/sombra.svg"
import {r} from "./menusearch"
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
                    src={papapandaData[r].img}
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
            <h3 /*onClick={click}*/> {papapandaData[r].text}</h3>
        </div>
        </div>
    );
};

export default PpImg ;
