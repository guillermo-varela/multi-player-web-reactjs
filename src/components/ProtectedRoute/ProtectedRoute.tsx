import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { signIn } from '../../model/routes';
import useTypedSelector from '../../hooks/useTypedSelector';

const ProtectedRoute = ({ component, ...rest }: any) => {
  const authenticationState = useTypedSelector(state => state.authentication);

  const routeComponent = (props: any) => (
    authenticationState.user
      ? React.createElement(component, props)
      : <Redirect to={{
        pathname: rest.path.substring(0, rest.path.lastIndexOf('/')) + signIn,
        state: { referrer: props.location }
      }} />
  );

  return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;
