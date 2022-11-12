/* eslint-disable no-dupe-keys */
import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp } from 'react-icons/io5';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';
import { ColorContext } from '../../contexts/ColorContext';

function Navbar() {
    const { color, setHandleDrawer } = useContext(ColorContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: color.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            position: "fixed",
            top:"30px",
            right: "30px",
            '&:hover': {
                color: color.primary,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: color.primary30,
            overflow: 'hidden',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            borderRadius: '10px',
            cursor: 'pointer',
            color: color.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: color.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: color.primary30,
            color: color.primary,
            width: '75%',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: color.secondary,
            boxShadow: '10px 10px 20px #112233',
            boxShadow: '-4px -4px 12px #ecf3f8',
            boxShadow: '-10px -10px 20px #fdfefe',
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: color.secondary,
                color: color.primary30,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
            <div  className='navbar--container'>
                <h1 style={{ color: color.secondary }}>
                    {/*shortname(headerData.name)*/}
                </h1>

                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                    id='navicon'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                   
                                    <span className={classes.drawerLinks}>
                                        home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <span className={classes.drawerLinks}>
                                        sobre
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#education'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <span className={classes.drawerLinks}>
                                        educação
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#skills'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <span className={classes.drawerLinks}>
                                        skills
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <span className={classes.drawerLinks}>
                                        projetos
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <span className={classes.drawerLinks}>
                                        contato
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
