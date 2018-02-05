import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// In this example, each route has two components
// that are rendered when the path matches the URL:
// 1) Sidebar  2) Main

const routes = [
  { path: '/', exact: true,
    sidebar: () => <div>You chose: Home</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/about',
    sidebar: () => <div>You chose: About</div>,
    main: () => <h2>About</h2>
  },
  { path: '/topics',
    sidebar: () => <div>You chose: Topics</div>,
    main: () => <h2>Topics</h2>
  }
]

const Sidebar = props => (

  <div style={{
    margin: 20,
    padding: 20,
    width: 100,
    background: '#f0f0f0'
  }}>

    <ul style={{listStyleType: 'none', padding: 0}}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>

    {routes.map((rt, idx) => (

      // When you render a <Route> anywhere in your app,
      // it will render with any others that match the URL.
      // You can use multiple routes to create 'breadcrumbs'.
      <Route
        key={idx}
        path={rt.path}
        exact={rt.exact}
        component={rt.sidebar}
      />

    ))}

  </div>

)

const Main = props => (

  <div style={{flex: 1, padding: 10}}>

    {routes.map((rt, idx) => (

      // Render more <Route>s with the same paths as
      // above, but different components this time.
      <Route
        key={idx}
        path={rt.path}
        exact={rt.exact}
        component={rt.main}
      />
      
    ))}

  </div>
)

const MultiRoutes = props => (
  <Router>
    <div style={{display: 'flex'}}>
      <Sidebar/>
      <Main/>
    </div>
  </Router>
)

export default MultiRoutes