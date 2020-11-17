import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({children, ...rest}) => {
    const userData = useSelector(state=>state.isSignIn)

    return (
        <Route
        {...rest}
        render={({ location }) =>
        userData ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default ProtectedRoute;