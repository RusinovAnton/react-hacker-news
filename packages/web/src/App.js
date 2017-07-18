import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
// --
import store from './store/configureStore'
import News from './scenes/News'
import Counter from './scenes/Counter'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div>
            <Link to="/">News</Link>
            <Link to="/counter">Counter</Link>
          </div>
          <Route exact path="/" component={News}/>
          <Route path="/counter" component={Counter}/>
        </div>
      </Router>
    </Provider>
  )
};

export default App
