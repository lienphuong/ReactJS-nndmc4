import React, {useState, useEffect} from 'react'
import ThemeContext from './ThemeContext'
import {defaultBirds, birdMapping, jsonUrl, url} from './BirdInit'
import './Bird.css'

function BirdUsingContext() {
    // array destructuring
    // useState is a Hook that lets you add React state to function components
    const [birds, setBird] = useState(defaultBirds)
    const [images, setImages] = useState({})

    useEffect(() => {
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

    const renderCheckboxTds = Object.keys(birdMapping).map(key =>
        <div key={key} className='Bird-list'>
            <input className='Bird' type='checkbox' name={key} onChange={handleChange}/>{birdMapping[key]}
        </div>
    )

    const renderImageTds = Object.keys(birdMapping).map(key =>
        <td key={key}>{birds[key] && images ? <img className='Bird-img' src={images[key]} alt=''/> : ''}</td>
    )

    const cls = React.useContext(ThemeContext)

    return (
        <div className={cls}>
            <p><b>Check boxes for pictures:</b></p>
            <table>
                <tbody>
                    <tr><td>{renderCheckboxTds}</td></tr>
                    <tr>{renderImageTds}</tr>
                </tbody>
            </table>
        </div>
    )

    /*
    return (<ThemeContext.Consumer>
                {cls => (
                    <div className={cls}>
                        <p><b>Pick some bird:</b></p>
                        <table>
                            <tbody>
                                <tr>{renderCheckboxTds}</tr>
                                <tr>{renderImageTds}</tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </ThemeContext.Consumer>
    )
     */
}

export default BirdUsingContext
