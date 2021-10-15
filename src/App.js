import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Layouts **/
import LoginLayoutRoute from "./pages/_layout/login-layout"
import HomeLayoutRoute from "./pages/_layout/home-layout";
import AdminLayoutRoute from './pages/_layout/admin-layout';

/** Components **/
import LoginPage from './pages/login/login.component';
import HomePage from './pages/home/home/home.component'
import AdminHomePage from './pages/admin/home/admin-home.component'
import AdminSamplePage from './pages/admin/sample/admin-sample.component'



import './App.scss'
import SamplePage from './pages/home/sample/sample.component';
import { GlobalProvider } from './context/GlobalState'
import { AuthProvider } from './hooks/useAuth'


class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <AuthProvider>

          <Router>
            <Switch>
              <Route exact path="/"><Redirect to="/login" /></Route>
              <LoginLayoutRoute exact path="/login" component={LoginPage} />

              <AdminLayoutRoute exact path="/admin" component={AdminHomePage} ></AdminLayoutRoute>
              <AdminLayoutRoute exact path="/adminsample" component={AdminSamplePage} ></AdminLayoutRoute>

              <HomeLayoutRoute exact path="/home" component={HomePage} />
              <HomeLayoutRoute exact path="/sample" component={SamplePage} />
            </Switch>
          </Router>

        </AuthProvider>
      </GlobalProvider>
    );
  }
}

export default App;
