import React from 'react';
import { Route, match } from 'react-router-dom';
import Home from './Home/Home'
import About from '../../components/About/About';
import MultimediaList from './MultimediaList/MultimediaList';
import MultimediaItemType from '../../model/MultimediaItemType';
import * as routes from '../../model/routes';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import SignIn from '../../components/SignIn/SignIn';

const NatureRouter: React.FC<{ match: match }> = (props: { match: match }) => {
  const { match } = props;
  return (
    <>
      <Route exact path={`${match.path}/`} component={Home} />
      <Route path={`${match.path}${routes.about}`} component={About} />
      <Route path={`${match.path}${routes.images}`} component={() => <MultimediaList type={MultimediaItemType.IMAGE} />} />
      <ProtectedRoute path={`${match.path}${routes.videos}`} component={() => <MultimediaList type={MultimediaItemType.VIDEO} />} />
      <Route path={`${match.path}${routes.signIn}`} component={() => <SignIn variant="success" />} />
    </>
  );
}

export default NatureRouter;
