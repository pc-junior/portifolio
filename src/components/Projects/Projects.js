import React,{ useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ColorContext } from '../../contexts/ColorContext';
import { projectsData } from '../../data/projectsData'

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { color } = useContext(ColorContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: color.tertiary, 
            backgroundColor: color.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: color.secondary, 
                backgroundColor: color.primary,
            }
        },
        viewArr : {
            color: color.tertiary, 
            backgroundColor: color.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: color.tertiary, 
                backgroundColor: color.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: color.primary30}}>
                    <div className="projects--header">
                        <h1 style={{color: color.primary}}>projetos</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 4).map(project => (
                                <SingleProject
                                    color={color}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div> 

                        
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
