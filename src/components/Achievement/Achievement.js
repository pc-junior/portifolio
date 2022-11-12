import React, { useContext} from 'react';

import './Achievement.css';
import { ColorContext } from '../../contexts/ColorContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

function Achievement() {

    const { color } = useContext(ColorContext);
    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{backgroundColor: color.secondary}}>
                <div className="achievement-body">
                    <h1 style={{color: color.primary}}>cursos</h1>
                    <h4 style={{color:color.tertiary}}>{achievementData.bio}</h4>
                </div>
                <div className="achievement-cards">
                    {achievementData.achievements.map(achieve => ( 
                        <AchievementCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Achievement
