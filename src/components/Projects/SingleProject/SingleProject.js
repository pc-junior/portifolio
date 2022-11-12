import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import './SingleProject.css';
import '../../../data/projectsData'

function SingleProject({ id, name, desc, tags, code, demo, image, color }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${color.tertiary}`,
            color: color.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: color.secondary,
                color: color.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${color.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: color.primary30 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: color.tertiary }}
                    >
                        {name}
                    </h2>
                    <img src={image} alt={name} />
                    <div className='project--showcaseBtn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                        >
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                className={classes.icon}
                                aria-label='Demo'
                            />
                        </a>
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: color.secondary,
                        color: color.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: color.secondary,
                        color: color.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
