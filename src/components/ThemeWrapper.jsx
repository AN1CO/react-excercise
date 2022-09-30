/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ThemeContext } from '../hooks/ThemeContext'
import { useContext } from 'react'

const ThemeWrapper = (props) => {
  const { darkMode, theme } = useContext(ThemeContext)
  const { lightTheme, darkTheme } = theme

  return (
    <div
      css={css({
        boxSizing: 'border-box',
        minHeight: '100%',
        padding: '40px 80px',
        transition: 'background 0.2s ease-out, color 0.2s ease-out',
        ...(darkMode ? darkTheme : lightTheme),
      })}
    >
      {props.children}
    </div>
  )
}
export default ThemeWrapper
