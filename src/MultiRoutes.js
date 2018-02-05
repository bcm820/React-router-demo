import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// In this example, each route has two components
// that are rendered when the path matches the URL.
// The rendering occurs via <Route>, which also has its own props...
// For example, props.match shows the path and URL (not shown below).

const routes = [
  { path: '/', exact: true,
    sidebar: () => <Sidebar path='/'/>,
    main: () => <h2>Home</h2>
  },
  { path: '/about',
    sidebar: () => <Sidebar path='/about'/>,
    main: () => <h2>About</h2>
  },
  { path: '/topics',
    sidebar: () => <Sidebar path='/topics'/>,
    main: () => <h2>Topics</h2>
  }
]

const Sidebar = ({path}) => (
  
  <div style={{
    margin: 10,
    padding: '10px 20px',
    width: 60,
    background: '#f0f0f0'
  }}>

    <ul style={{listStyleType: 'none', padding: 0}}>
      
      <li>
        <Link to="/">{path === '/'
        ? <strong>Home</strong>
        : 'Home'}
        </Link>
      </li>

      <li>
        <Link to="/about">{path === '/about'
        ? <strong>About</strong>
        : 'About'}
        </Link>
      </li>

      <li>
        <Link to="/topics">{path === '/topics'
        ? <strong>Topics</strong>
        : 'Topics'}
        </Link>
      </li>

    </ul>

  </div>

)

const Main = props => (

  <div style={{flex: 1, padding: 10}}>

    {routes.map((rt, idx) => (

      // When you render a <Route> anywhere in your app,
      // it will render with any others that match the URL.
      // You can use multiple routes to create 'breadcrumbs'.
      <Route
        key={idx}
        path={rt.path}
        exact={rt.exact}
        component={rt.main}
      />
      
    ))}

  </div>
)

const App = props => (
  <Router>
    <div style={{display: 'flex'}}>
      
      {routes.map((rt, idx) => (

        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={idx}
          path={rt.path}
          exact={rt.exact}
          component={rt.sidebar}
        />

      ))}

      <Main/>
    </div>
  </Router>
)

export default App