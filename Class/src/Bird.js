import React, {Component} from 'react'
import {defaultBirds, birdMapping, jsonUrl, url} from './BirdInit'
import './Bird.css'

class Bird extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...defaultBirds,
            images: {}
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch(jsonUrl)
            .then(response => response.json())
            .then(response => {
                const {images} = response.data
                Object.entries(images).map(bird => images[bird[0]] = url + bird[1])
                this.setState({
                    images: images
                })
            })
    }

    handleChange(event) {
        const {name, checked} = event.target
        this.setState({
            [name]: checked
        })
    }

    renderCheckboxTds() {
        return (Object.keys(birdMapping).map(key =>
                <div key={key} className='Bird-list'>
                    <input className='Bird' type='checkbox' name={key} onChange={this.handleChange}/>{birdMapping[key]}
                </div>
            )
        )
    }

    renderImageTds() {
        return (Object.keys(birdMapping).map(key =>
                <td key={key}>
                    {this.state[key] && this.state.images ? <img className='Bird-img' src={this.state.images[key]} alt=''/> : ''}
                </td>
            )
        )
    }

    render() {
        return (
            <div className='Bird'>
                <b>Check boxes for pictures:</b>
                <table>
                    <tbody>
                        <tr><td>{this.renderCheckboxTds()}</td></tr>
                        <tr>{this.renderImageTds()}</tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Bird
