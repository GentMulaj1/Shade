import React, { useEffect, useState } from 'react'

const ApiData = () => {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return (
        <div>

            <pre>
                {JSON.stringify(starWarsData, null, 2)}
            </pre>

            <button onClick={() => setCount(count+1)}>Get Next Character</button>

        </div>
    )
}

export default ApiData