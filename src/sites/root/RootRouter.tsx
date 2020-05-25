import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import * as routes from '../../model/routes';

const RootHome = lazy(() => import('./RootHome/RootHome'));
const NatureApp = lazy(() => import('../nature/NatureApp'));
const SpaceApp = lazy(() => import('../space/SpaceApp'));

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Suspense fallback={<FormattedMessage id='root.loading' />}>
        <Switch>
          <Route exact path={routes.root} component={RootHome} />
          <Route path={routes.nature} component={NatureApp} />
          <Route path={routes.space} component={SpaceApp} />
          <Route path={routes.all} component={() => <Redirect to={routes.root} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default RootRouter;
