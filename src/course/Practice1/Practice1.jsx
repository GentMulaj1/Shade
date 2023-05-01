import React, { useState } from 'react'
import './Practice1.css'
import HeaderP1 from './HeaderP1'
import MainP1 from './MainP1'


const Practice1 = () => {
    const [darkMode, setDarkMode] = useState(true)
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div style={{width: "700px", margin: '50px auto'}}>
            <HeaderP1 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainP1 darkMode={darkMode} />
        </div>
    )
}

export default Practice1