import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './components/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './components/actions/authActions'

import { Provider } from 'react-redux';
import store from './store'

import Front from './components/layout/MainContent'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href="./";
  }
}

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Router>
          <div className="App">
          <Header />
          {/* <Front /> */}
            <Switch>  
              <Route exact path="/" component={Front} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
