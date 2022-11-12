import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ColorContext } from '../../contexts/ColorContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { color } = useContext(ColorContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:color.primary30,
            "&:hover": {
                backgroundColor:color.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: color.primary}}>
                    <img src={color.type === 'dark' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: color.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: color.tertiary}}>{course}</h4>
                    <h5 style={{color: color.tertiary80}}>{institution}</h5>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
