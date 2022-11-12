import React, { useContext } from 'react';

import { ColorContext } from '../../contexts/ColorContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { color } = useContext(ColorContext);
    return (
        <div className="education" id="education" style={{backgroundColor: color.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:color.primary}}>educação</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={color.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
