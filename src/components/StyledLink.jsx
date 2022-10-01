import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../hooks/ThemeContext'
import { useContext } from 'react'

const { darkMode, linkTheme } = useContext(ThemeContext)
const { lightTheme, darkTheme } = linkTheme

const StyledLink = styled(Link)`
  color: turquoise;
  &:visited {
    color: '#e3d2fe';
  }
  &:hover {
    color: '#e3d2fe';
  }
`
export default StyledLink
