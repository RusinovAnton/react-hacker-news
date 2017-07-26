import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
// --
import store from 'store/configureStore'
import News from './scenes/news/NewsList'
import Counter from './scenes/counter/Counter'



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div>
            <Link to="/">News</Link>
            <Link to="/counter">Counter</Link>
          </div>
          <Switch>
            <Route path="/news" component={News}/>
            <Route path="/counter" component={Counter}/>
            <Redirect to="/news"/>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
};

export default App
