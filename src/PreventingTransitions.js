import React from 'react'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <nav style={{listStyleType: 'none', padding: 0}}>
        <a style={{paddingRight: 10}}><Link to="/">Form</Link></a>
        <a style={{paddingRight: 10}}><Link to="/one">One</Link></a>
        <a><Link to="/two">Two</Link></a>
      </nav>
      <hr/>
      <Route path="/" exact component={Form}/>
      <Route path="/one" render={() => <h3>One</h3>}/>
      <Route path="/two" render={() => <h3>Two</h3>}/>
    </div>
  </Router>
)

class Form extends React.Component {

  state = {isBlocking: false}

  render() {

    const {isBlocking} = this.state

    return (
      
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({isBlocking: false})
        }}
      >

        <Prompt
          when={isBlocking}
          message={location => `Are you sure you want to go to ${location.pathname}?`}
        />

        <p>Blocked? {isBlocking ? 'Yes. Click a link...' : 'Nope.'}</p>

        <p>
          <input
            size="35"
            placeholder="Type something to block transitions."
            onChange={event => this.setState({isBlocking: event.target.value.length > 0})}
          />
          <button>Stop Blocking</button>
        </p>

      </form>
    )
  }
}

export default App