import React, { useContext } from 'react';

import './About.css';
import { ColorContext } from '../../contexts/ColorContext';
/*import { aboutData } from '../../data/aboutData'*/
import  pcJunior  from '../../assets/svg/about/pcJunior.svg';



function About() {

    const { color } = useContext(ColorContext);
    return (
        <div className="about" id="about" style={{backgroundColor: color.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: color.primary}}></div>
              <div className="style-circle" style={{backgroundColor: color.primary}}></div>
              <div className="style-line" style={{backgroundColor: color.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: color.primary}}>quem é o PC?</h2>
                    <p style={{color:color.tertiary80}}>O computador sempre fez parte da minha vida de forma natural, seja fazendo manutenção, design ou programação, mas sempre foi um hobby.<br/><br/>Após trabalhar em outras áreas, percebi que minha vocação é trabalhar com interface e desenvolvimento front-end, são atividades que me dão prazer em exercer. Sou criativo, comunicativo, observador e dinâmico. Por isso busco agora uma vaga profissional para aprimorar minhas habilidades técnicas e dedicar minha evolução com que me der essa oportunidade.</p>
                </div>
                <div className="about-img">
                    <img 
                        src={pcJunior}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
