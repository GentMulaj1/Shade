import React, { useState } from 'react'
import memesData from './memesData'

const Project2 = () => {
    const [memeImage, setMemeImage] = useState("")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = useState(memesData)


    let url

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }    

    return (
        <main style={{margin: '0 auto'}}>
            <div style={{width: '500px', margin:'0 auto'}}>
                <input 
                    style={{width: '50%'}} 
                    type="text"
                    name='topText'
                    value={meme.topText}  
                    onChange={handleChange}    
                />
                
                <input 
                    style={{width: '50%'}} 
                    type="text"
                    name='bottomText'   
                    value={meme.bottomText}
                    onChange={handleChange}    
                />
                
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>    
            
            <div style={{position: 'relative'}}>
                <h3>{meme.topText}</h3>
                <img src={meme.randomImage} style={{width: '700px', margin: '50px 0px', padding: '20px', objectFit: 'contain'}} />
                <h3>{meme.bottomText}</h3>
            </div>
            
        </main>
    )
}

export default Project2