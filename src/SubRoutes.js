import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Tortas = () => <h2>Sandwiches</h2>
const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/corn">Corn</Link></li>
      <li><Link to="/tacos/flour">Flour</Link></li>
    </ul>
    {routes.map((rt, i) => <RouteWithSubs key={i} {...rt}/>)}
  </div>
)
const Corn = () => <h3>Corn</h3>
const Flour = () => <h3>Flour</h3>

const routes = [
  { path: '/tortas', component: Tortas },
  { path: '/tacos', component: Tacos,
    routes: [
      { path: '/tacos/corn', component: Corn },
      { path: '/tacos/flour', component: Flour }
    ]
  }
]

// wrap <Route> and use this instead
// if a route has subroutes, they'll be included
const RouteWithSubs = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const App = () => (
  <Router>
    <div>
    <Link to="/sandwiches">Sandwiches</Link><br/>
    <Link to="/tacos">Tacos</Link><br/>
      {routes.map((rt, i) => <RouteWithSubs key={i} {...rt}/>)}
    </div>
  </Router>
)

export default App