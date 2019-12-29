import React, {useState, useEffect} from 'react'
import {defaultBirds, birdMapping, jsonUrl, url} from './BirdInit'
import './Bird.css'

function BirdUsingEffect() {
    // array destructuring
    // useState is a Hook that lets you add React state to function components
    const [birds, setBird] = useState(defaultBirds)

    const [images, setImages] = useState({})

    // useEffect is a hook that lets you perform side effects in function components
    // By using this Hook, you tell React that your component needs to do something after render
    //
    // Important note:
    // - By default, useEffect runs BOTH after the first render and after every update
    // - The function passed to useEffect is the effect
    //
    // Note of side effects:
    // - Examples: data fetching, setting up a subscription, and manually changing the DOM in React components
    // - Two common kinds in React components: those that don’t require cleanup, and those that do
    //
    // State hook can used more than once, and several effects can be used
    useEffect(() => {
        console.log("---> useEffect...")
        fetch(jsonUrl)
            .then(response => response.json())
            .then(response => {
                const {images} = response.data
                Object.entries(images).map(bird => images[bird[0]] = url + bird[1])
                setImages(images)
            })
    }, [images.balimynah, images.iiwi, images.pigeon, images.robin, images.wren])

    // handle onChange event
    const handleChange = (e) => {
        const {name, checked} = e.target
        setBird({
            ...birds,
            [name]: checked
        })
    }

    const renderCheckboxes = Object.keys(birdMapping).map(key =>
        <div key={key}><input className='Bird' type='checkbox' name={key} onChange={handleChange}/>{birdMapping[key]}</div>
    )

    const renderImageTds = Object.keys(birdMapping).map(key =>
        <td key={key}>{birds[key] && images ? <img className='Bird-img' src={images[key]} alt=''/> : ''}</td>
    )

    return (<div className='Bird'>
                <b>Pick some bird:</b>
                {renderCheckboxes}
                <table><tbody><tr>{renderImageTds}</tr></tbody></table>
            </div>
    )
}

export default BirdUsingEffect
