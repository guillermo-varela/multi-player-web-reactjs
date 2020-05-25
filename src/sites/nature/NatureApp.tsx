import React, { useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
import { useIntl, FormattedMessage } from 'react-intl';
import Header from './Header/Header';
import useTypedSelector from '../../hooks/useTypedSelector';
import useAuthentication from '../../hooks/useAuthentication';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/Footer/Footer';
import NatureRouter from './NatureRouter';

import './NatureApp.scss';

const NatureApp: React.FC = (props: any) => {
  const authenticationState = useTypedSelector(state => state.authentication);
  useAuthentication();
  const intl = useIntl();

  const favicon = document.querySelector('link[rel="shortcut icon"]');
  favicon?.setAttribute('href', `${process.env.REACT_APP_BASENAME}sites/nature/favicon.ico`);

  useEffect(() => {
    document.title = intl.formatMessage({ id: 'nature.title' });
    // eslint-disable-next-line
  }, [intl.formatMessage({ id: 'nature.title' })]);

  return (
    authenticationState.isPendingCheckAuthentication
      ?
      <div className="mx-auto text-center mt-3">
        <Loading variant="success" />
        <Fade in={authenticationState.isPendingCheckAuthenticationTooLong}>
          <div id="checkAuthenticationTooLong">
            <FormattedMessage id='root.checkAuthentication.tooLong' />
          </div>
        </Fade>
      </div>
      :
      <div className="d-flex flex-column h-100">
        <Header match={props.match} />
        <main>
          <div className="container">
            <NatureRouter match={props.match} />
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default NatureApp;
