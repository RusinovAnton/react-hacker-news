import React from 'react'
import { NativeRouter as Router, Route, Link } from 'react-router-native'
import { Provider } from 'react-redux'
import { Text, View, Button, Image } from 'react-native'
// --
import store from './store/configureStore'
import Counter from './src/scenes/Counter'
import News from './src/scenes/News'

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <View style={{paddingTop: 30}}>
          <View style={{marginBottom: 10}}>
            <Link to="/" style={{marginBottom: 10, padding: 10}}><Text>News</Text></Link>
            <Link to="/counter" style={{padding: 10}}><Text>Counter</Text></Link>
          </View>
          <Route exact path="/" component={News}/>
          <Route path="/counter" component={Counter}/>
        </View>
      </Router>
    </Provider>
  );
}
