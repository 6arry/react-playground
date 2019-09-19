import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Host from './pages/Host';
import Join from './pages/Join';
import Logout from './pages/Logout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className='App'>
            <Navigation />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/host' component={Host} />
              <Route path='/join' component={Join} />
              <Route path='/logout' component={Logout} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
