import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/team-matches/:id" component={TeamMatches}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)
export default App
