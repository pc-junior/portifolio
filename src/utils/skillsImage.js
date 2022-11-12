import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import dart from '../assets/svg/skills/dart.svg'
import python from '../assets/svg/skills/python.svg'
import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import aws from '../assets/svg/skills/aws.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import lightroom from '../assets/svg/skills/lightroom.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import premierepro from '../assets/svg/skills/premierepro.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'
import blender from '../assets/svg/skills/blender.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import markdown from '../assets/svg/skills/markdown.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import sketch from '../assets/svg/skills/sketch.svg'
import unity from '../assets/svg/skills/unity.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {     
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css; 
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript; 
        case 'bootstrap':
            return bootstrap;
        case 'dart':
            return dart; 
        case 'python':
            return python;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws; 
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git; 
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui; 
        case 'premiere pro':
            return premierepro;
        case 'wordpress':
            return wordpress;
        case 'blender':
            return blender;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice; 
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        default:
            break;
    }
}
