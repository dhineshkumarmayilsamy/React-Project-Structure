import React from 'react';
import { NavLink, Redirect, Route } from "react-router-dom";
import {Header} from '../header/header.component';
import { useAuth } from '../../hooks/useAuth';

const HomeLayout = ({ children, ...rest }) => {
  return (
    <React.Fragment>

    
      <Header/>
      <div id="layoutSidenav">

        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Heading</div>
                <NavLink className="nav-link" activeClassName="active" to="/home">
                  <div className="sb-nav-link-icon"><i className="fas fa-code"></i></div>
                  Home
                </NavLink>

                <NavLink className="nav-link" activeClassName="active" to="/sample">
                  <div className="sb-nav-link-icon"><i className="fas fa-anchor"></i></div>
                  Sample
                </NavLink>
              </div>
            </div>
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              {children}
            </div>
          </main>
        </div>

      </div>
    </React.Fragment>
  );
};

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  if(auth?.user?.isLoggedin === true){
    return (
      <Route
        {...rest}
        render={(props) => (
          <HomeLayout>
            <Component {...props} />
          </HomeLayout>
        )}
      />
    );

  }else{
    return (<Redirect to="/login" />)
  }
  
};

export default HomeLayoutRoute;