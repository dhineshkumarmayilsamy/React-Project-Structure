import React from 'react';
import { Route, NavLink, Redirect } from "react-router-dom";
import {Header} from '../header/header.component';
import { useAuth } from '../../hooks/useAuth';

const AdminLayout = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <Header/>

      <div id="layoutSidenav">

        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Heading</div>
                <NavLink className="nav-link" activeClassName="active" to="/admin">
                  <div className="sb-nav-link-icon"><i className="fas fa-code"></i></div>
                  Admin Home
                </NavLink>

                <NavLink className="nav-link" activeClassName="active" to="/adminsample">
                  <div className="sb-nav-link-icon"><i className="fas fa-anchor"></i></div>
                  Admin Sample
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

const AdminLayoutRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  if(auth?.user?.isLoggedin === true){
    return (
      <Route
        {...rest}
        render={(props) => (
          <AdminLayout>
            <Component {...props} />
          </AdminLayout>
        )}
      />
    );

  }else{
    return (<Redirect to="/login" />)
  }

};

export default AdminLayoutRoute;