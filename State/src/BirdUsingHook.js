import React, {useState} from 'react'
import {defaultBirds, birdMapping, images} from './BirdInit'
import './Bird.css'

function BirdUsingHook() {
    // array destructuring
    // useState is a Hook that lets you add React state to function components
    const [birds, setBird] = useState(defaultBirds)

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

    return (<div className='Bird'>
                <b>Check boxes for pictures:</b>
                <table>
                    <tbody>
                        <tr><td>{renderCheckboxTds}</td></tr>
                        <tr>{renderImageTds}</tr>
                    </tbody>
                </table>
            </div>
    )
}

export default BirdUsingHook
