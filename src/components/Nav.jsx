/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../hooks/ThemeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const { darkMode, toggleDarkMode, buttonTheme } = useContext(ThemeContext)
  const { lightTheme, darkTheme } = buttonTheme

  return (
    <nav
      css={css`
        align-items: center;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 60px;
      `}
    >
      <ul
        css={css`
          display: flex;
          list-style: none;
          > li {
            margin-left: 20px;
          }
          & a {
            color: inherit;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        `}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/stocks">Stocks</Link>
        </li>
      </ul>
      <button
        css={css`
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 20px;
          outline: none;
        `}
        className="dark-mode-button"
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon
          color={darkMode ? darkTheme.color : lightTheme.color}
          icon={darkMode ? darkTheme.icon : lightTheme.icon}
          size="lg"
        />
      </button>
    </nav>
  )
}

export default Nav
