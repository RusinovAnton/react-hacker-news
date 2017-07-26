import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import Counter from './scenes/counter/Counter';
import Navbar from './components/Navbar';
import News from './scenes/news/NewsList';

const App = () =>
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/news" component={News} />
          <Route path="/counter" component={Counter} />
          <Redirect to="/news" />
        </Switch>
      </div>
    </Router>
  </Provider>;

export default App;
