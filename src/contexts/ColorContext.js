import React, { createContext, useState } from 'react'

import { colorData } from '../data/colorData'

export const ColorContext = createContext()

function ColorContextProvider(props) {
    const [color, setcolor] = useState(colorData.color)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    const value = { color, drawerOpen, setHandleDrawer }
    return (
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    )
}


export default ColorContextProvider