import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import * as serviceWorker from './serviceWorker'

// useContext hook (requires ChangeTheme.js, ThemeContext.js, BirdUsingContext.js, images.json, BirdMapping.js, BirdInit.js, and Bird.css)
import ChangeTheme from './ChangeTheme'
ReactDOM.render(<ChangeTheme />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
