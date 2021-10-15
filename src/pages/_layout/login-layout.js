import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const LoginLayout = ({ children }) => (
  <div>
    {children}
  </div>
);

const LoginLayoutRoute = ({ component: Component, ...rest }) => {

  const auth = useAuth();
  console.log(auth);
  if (auth?.user?.isLoggedin === true) {
    return (<Redirect to="/home" />)

  } else {
    return (
      <Route {...rest} render={props => (
        <LoginLayout>
          <Component {...props} />
        </LoginLayout>
      )} />
    )

  }

};

export default LoginLayoutRoute;