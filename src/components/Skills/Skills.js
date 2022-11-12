import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ColorContext } from '../../contexts/ColorContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { color } = useContext(ColorContext);

    const skillBoxStyle = {
        backgroundColor: "#ecf3f8",
        boxShadow: `0px 0px 10px ${color.primary30}`
    }

    return (
        <div id ="skills"className="skills" style={{backgroundColor: "#ecf3f8"}}>
            <div className="skillsHeader">
                <h2 style={{color: color.primary}}>skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: color.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: color.primary}}></div>
              <div className="style-circle" style={{backgroundColor: color.primary}}></div>
              <div className="style-line" style={{backgroundColor: color.primary}}></div>
            </div>
        </div>
        
    )
}

export default Skills
