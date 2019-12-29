import React, {useState} from 'react'
import ThemeContext from './ThemeContext'
import BirdUsingContext from './BirdUsingContext'

function ChangeTheme() {
    const [theme, setTheme] = useState('Bird-light-theme')

    const toggleTheme = () => {
        setTheme(theme === 'Bird-dark-theme' ? 'Bird-light-theme' : 'Bird-dark-theme')
    }

    return (
        <ThemeContext.Provider value={theme}>
            <button className='Bird-button' onClick={toggleTheme}>
                Click here to change to {theme === 'Bird-dark-theme' ? ' light ' : ' dark '} theme
            </button>
            <BirdUsingContext />
        </ThemeContext.Provider>
    )
}

export default ChangeTheme
