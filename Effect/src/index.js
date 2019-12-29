import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import * as serviceWorker from './serviceWorker'

// useEffect hook (requires BirdUsingEffect.js, images.json, BirdMapping.js, BirdInit.js, and Bird.css)
import BirdUsingEffect from './BirdUsingEffect'
ReactDOM.render(<BirdUsingEffect />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
