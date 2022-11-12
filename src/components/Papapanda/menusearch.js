import React, { useState, useRef } from "react";
import "./menusearch.css"
import clogo from "./img/c-logo.svg"
import { NavHashLink as NavLink } from 'react-router-hash-link';





function MenuSearch() {
    
    
    const [active, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!active);
      };
    
    
    
    const wrapperRef = useRef(null);    

    return (
        <div className="container">
            <div className="wrapper">
                <div className="form-wrapper">
                    <div className="form-center">
                    <div className='menu-wrapper'></div>
                    <form>
                        <div className="form-input">
                            {/*<img className="b-logo" src="src/img/b-logo.svg" alt="underbox" />*/}
                            <nav className={
                                    active
                                    ? "menu-opener"
                                    : "menu-opener active"
                                } onClick={handleToggle} ref={wrapperRef}>
                                <div className={
                                    active
                                    ? "menu-opener-inner"
                                    : "menu-opener-inner active"
                                }></div>
                            </nav>
                            <nav className={
                                    active
                                    ? "menu"
                                    : "menu active"
                                }>
                                <ul className="menu-inner">
                                    <NavLink
                                    className="menu-link"
                                    to='/#about'
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                    >
                                        <li>sobre</li>
                                    </NavLink>
                                    <NavLink
                                    className="menu-link"
                                    to='/#skills'
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                    >
                                        <li>skills</li>
                                    </NavLink>
                                    <NavLink
                                    className="menu-link"
                                    to='/#projects'
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                    >
                                        <li>projetos</li>
                                    </NavLink>
                                    <NavLink
                                    className="menu-link"
                                    to='/#contacts'
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                    >
                                        <li>contato</li>
                                    </NavLink>                                    
                                </ul>
                            </nav>
                            <input type="text" id="batata" className="batata" name='q' placeholder="Batata frita?" />
                            <button id="ooo" type="button" className='button' >
                                <img className="c-logo" src={clogo} alt="Vai na sorte!"/>
                            </button>
                        </div>
                    </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuSearch