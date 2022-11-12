import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FaLinkedinIn,
    FaGithub,
    FaCodepen,
} from 'react-icons/fa';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ColorContext } from '../../contexts/ColorContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {

    const { color } = useContext(ColorContext);

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${color.primary80}`,
            backgroundColor: `${color.secondary}`,
            color: `${color.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${color.primary600}`,
            },
        },
        message: {
            border: `4px solid ${color.primary80}`,
            backgroundColor: `${color.secondary}`,
            color: `${color.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${color.primary600}`,
            },
        },
        label: {
            backgroundColor: `${color.secondary}`,
            color: `${color.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: color.primary,
            color: color.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: color.secondary,
                backgroundColor: color.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: color.primary,
            color: color.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: color.secondary,
                backgroundColor: color.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: color.primary,
            color: color.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: color.secondary,
                backgroundColor: color.tertiary,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: color.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: color.primary }}>contatos</h1>
                <div className='contacts-body'>                    
                    <div className='contacts-details'>
                        <a
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: color.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: color.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: color.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {/*socialsData.codepen && (
                                <a
                                    href={socialsData.codepen}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaCodepen aria-label='CodePen' />
                                </a>
                            )}
                             */}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={color.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
