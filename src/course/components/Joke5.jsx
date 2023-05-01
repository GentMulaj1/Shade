import React from 'react'

const Joke5 = ({ setup, punchline}) => {
    return (
        <div style={{border: '1px solid black', padding: '20px 0px'}}> 
            {setup && <h3>Setup: {setup}</h3>}
            <i>Punchline: {punchline}</i>
        </div>
    )
}

export default Joke5