/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '../hooks/ThemeContext'
import About from './About'
import Home from './Home'
import Nav from './Nav'
import ThemeWrapper from './ThemeWrapper'

const App = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App
