import React, { createContext, useState } from 'react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeContext = createContext()

const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = {
    lightTheme: {
      backgroundColor: '#fff',
      color: '#34374c',
    },
    darkTheme: {
      backgroundColor: '#34374c',
      color: '#fff',
    },
  }

  const buttonTheme = {
    lightTheme: {
      color: '#34374c',
      icon: faSun,
    },
    darkTheme: {
      color: '#ffbf2f',
      icon: faMoon,
    },
  }

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode)
  }
  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, theme, buttonTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
