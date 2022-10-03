import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
export default StyledLink
