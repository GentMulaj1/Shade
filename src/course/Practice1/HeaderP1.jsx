import React, { useState } from 'react'

const HeaderP1 = (props) => {
    return (
    <nav 
    className={props.darkMode ? "dark": ""}
    >
        <img 
            className="nav--logo_icon"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        />
        <h3 className="nav--logo_text">ReactFacts</h3>

        <div 
            className="toggler" 
        >
            <p className="toggler--light">Light</p>
            <div 
                className="toggler--slider"
                onClick={props.toggleDarkMode}
            >
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
        </div>
    </nav>
    )
}

export default HeaderP1