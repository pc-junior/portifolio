import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ColorContext } from '../../contexts/ColorContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import profileAvatar from '../../assets/png/profileAvatar.png'

import {
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';

function Landing() {
    const { color, drawerOpen } = useContext(ColorContext);

    const useStyles = makeStyles((t) => ({
        cvBtn: {
            color: color.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${color.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: color.tertiary,
                color: color.secondary,
                border: `3px solid ${color.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: color.primary,
            color: color.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${color.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: color.secondary,
                color: color.tertiary,
                border: `3px solid ${color.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: color.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: color.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        
                    </div>
                </div>
                <img
                    src={profileAvatar}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: color.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                >
                    <div
                        className='lcr--content'
                    >
                        <h6>web developer</h6>
                        <h1>PC Junior</h1>
                        <p>aspirante a desenvolvedor front-end; ocasionalmente designer; entusiasta por experiência de usuários; em busca de experiência profissional.</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.cvPdf && (
                                <a
                                    href={headerData.cvPdf}
                                    download='cv'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.cvBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contato
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
