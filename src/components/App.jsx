/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route, Switch, Redirect } from 'react-router-dom'
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
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stocks" component={Stocks} />
          <Route path="/stock/:id" render={(props) => <Stock {...props} />} />
          <Redirect to="/" />
        </Switch>
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App
