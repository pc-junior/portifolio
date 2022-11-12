import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Papapanda, Landing, About, Skills, Education, Contacts, Projects, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />
            <Papapanda />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Projects />
            <Achievement />
            <Contacts />
        </div>
    )
}

export default Main
