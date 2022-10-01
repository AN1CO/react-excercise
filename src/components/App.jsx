/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '../hooks/ThemeContext'
import About from './About'
import Home from './Home'
import Nav from './Nav'
import Stock from './Stock'
import Stocks from './Stocks'
import ThemeWrapper from './ThemeWrapper'

const App = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/stock/:id" render={(props) => <Stock {...props} />} />
        </Switch>
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App
